/**
 * Created by Sudip on 26-01-2017.
 */
(function() {
    var app = angular.module('onlinetest', []);
    app.controller('QuestionController', function ($interval) {
        var parentScope = this;
        this.id = 0;
        this.examSet = examSet;
        this.examRefNo = examSet.examRefNo;
        this.studentName = examSet.studentName;
        this.examSubject = examSet.examSubject;
        this.examTimeTotal = examSet.examTimeTotal;
        this.examTimeRemain = examSet.examTimeRemain;
        this.questions = examSet.questions;
        this.maxId = this.questions.length-1;
        this.module = this.questions[this.id];
        this.boxAnswer = function(option){
            var idx = this.module.answer.indexOf(option);
            // Is currently selected
            if (idx > -1) {
                this.module.answer.splice(idx, 1);
            }
            // Is newly selected
            else {
                this.module.answer.push(option);
            }
        };
        this.radioAnswer = function(option){
            this.module.answer= [option];
        };
        this.setPrevId = function(){
            this.module.skip = true;
            this.module.answer.forEach(function(n){
                if (n!=""){
                    this.module.skip = false;
                }
            },this);
            if(this.id>0){this.id=this.id-1}
            this.module = this.questions[this.id];
            //writeTemp(this.modules);
        };
        this.setNextId = function(){
            this.module.skip = true;
            this.module.answer.forEach(function(n){
                if (n!=""){
                    this.module.skip = false;
                }
            },this);
            if(this.id<this.maxId){this.id=this.id+1}
            this.module = this.questions[this.id];
            //writeTemp(this.modules);
        };
        this.setReview = function(){
            this.module.review = true;
        };
        this.unsetReview = function(){
            this.module.review = false;
        };
        this.reset = function(){
            this.module.answer = [];
        };
        this.setQuestionId = function(no){
            this.id = no;
            this.module = this.questions[this.id];
        };
        this.questionListCol = new Array(5);
        this.questionListRow = new Array(Math.ceil((this.maxId+1) / 5));
        this.timer = $interval(function(){
            parentScope.examTimeRemain = parentScope.examTimeRemain - 1000;
            if(parentScope.examTimeRemain==0){
                $interval.cancel(parentScope.timer);
            }
        },1000);


    });
})();
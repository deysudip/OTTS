/**
 * Created by Sudip on 26-01-2017.
 */
(function() {
    var app = angular.module('onlinetest', []);
    app.controller('QuestionController', function () {
        this.id = 0;
        this.modules = modules;
        this.maxId = modules.length;
        this.module = modules[this.id];
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
            this.module = modules[this.id];
            writeTemp(this.modules);
        };
        this.setNextId = function(){
            this.module.skip = true;
            this.module.answer.forEach(function(n){
                if (n!=""){
                    this.module.skip = false;
                }
            },this);
            if(this.id<this.maxId-1){this.id=this.id+1}
            this.module = modules[this.id];
            writeTemp(this.modules);
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
            this.module = modules[this.id];
        };

    });

    app.controller("BtnController", function(){
        this.btn = 'hello';


    });

})();
(function () {
    var card = {
        init: function () {
            this.initVar();
            this.bindEvent();
            
        },
        initVar: function () {
            this.card = document.querySelector(".card")
            this.cardName = document.querySelector('*[name="card-name"]');
            this.cardUserName = document.querySelector('#card-user-name');
            this.cardBgFlag = document.querySelector(".card-bg-flag");
            this.cardBgWrap = document.querySelector(".card-bg-wrapper");
            this.cardNumber = document.querySelector('[name="card-number"]');
            this.cardUserNumber = document.querySelector('.card-number');
            this.cardError = document.querySelector('.error-message')
            this.cardBgs = [];
            document.querySelectorAll(".card-bg").forEach(e=> this.cardBgs.push(e))
        },
        bindEvent: function () {
            var self = this;

            self.cardName.addEventListener('input', function () {
                self.cardUserName.innerHTML = self.cardName.value

            })

            self.cardNumber.addEventListener('input', function(){

                var regNumber = (/[^0-9]/g)
                self.cardError.classList.remove('show')
                var length = 16
                if(!regNumber.test(self.cardNumber.value)){
                    self.cardUserNumber.innerHTML = self.cardNumber.value.substring(0, length)
                    
                }
               else{
                self.cardNumber.classList.add('error-border')
                self.cardError.classList.add('show')
               }
            })
            
            self.cardBgFlag.addEventListener('click',function(){
                if(self.cardBgWrap.classList.contains('card-bg-wrapper_new-position')){
                    self.cardBgWrap.classList.remove('card-bg-wrapper_new-position')
                }
                else{
                    self.cardBgWrap.classList.add('card-bg-wrapper_new-position')

                }
            }) 
            self.cardBgs.forEach(function(e){
                e.addEventListener('click', function(e){
                    [...self.card.classList].filter(function(e){
                     return e.startsWith('card-bg')
                    }).forEach(function(e){
                        self.card.classList.remove(e)

                    })
                   var target = e.target 
                   var targetBg = target.classList[target.classList.length -1]
                   self.card.classList.add(targetBg)
                })
            })
           
        }
    };
    card.init()
})();
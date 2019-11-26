(function () {
    var card = {
        init: function () {
            this.initVar();
            this.bindEvent();
            this.optionMonth();
            this.optionYear();

        },
        initVar: function () {
            this.card = document.querySelector(".card")
            this.cardName = document.querySelector('input[name="card-name"]');
            this.cardUserName = document.querySelector('#card-user-name');
            this.cardUserNameWr = document.querySelector('.card-data_wrapper__name');
            this.cardBgFlag = document.querySelector(".card-bg-flag");
            this.cardBgWrap = document.querySelector(".card-bg-wrapper");
            this.cardNumber = document.querySelector('[name="card-number"]');
            this.cardUserNumber = document.querySelector('.card-number');
            this.cardError = document.querySelector('.error-message');
            this.cardNumberElement = [...document.querySelectorAll(".card-number__item")];
            this.month = document.querySelector("select[name='month']");
            this.year = document.querySelector("select[name='year']");
            this.cardMonth = document.querySelector('#month');
            this.cardYear = document.querySelector('#year');
            this.cardDate = document.querySelector('.card-data_wrapper__date')
            this.pageCvv = document.querySelector('.data__cvv')    
            this.cardCvv = document.querySelector('.card-data__cvv')
            this.cardFront = document.querySelector('.card-front')
            this.cardBack = document.querySelector('.card-data__back')
            this.cardBgs = [];
            document.querySelectorAll(".card-bg").forEach(e => this.cardBgs.push(e))
        },
        bindEvent: function () {
            var self = this;

            self.cardName.addEventListener('input', function () {
                if(self.cardName.value){
                    self.cardUserNameWr.classList.add('card-border')
                    self.cardUserName.innerText = self.cardName.value
                }
                else{
                    self.cardUserNameWr.classList.remove('card-border')
                    self.cardUserName.innerText = 'FULL NAME'
                }
               

            })
            self.cardName.addEventListener('blur', function () {
                self.cardUserNameWr.classList.remove('card-border')

            })

            self.cardNumber.addEventListener('input', function () {
                var regNumber = (/[^0-9]/g)
                self.cardError.classList.remove('show')
                self.cardNumber.classList.remove('error-border')
                if (!regNumber.test(self.cardNumber.value)) {
                    self.cardUserNumber.classList.add('card-border')
                    for (var i = 0; i < self.cardNumberElement.length; i++) {
                        self.cardNumberElement[i].innerText = self.cardNumber.value[i]
                            ? self.cardNumber.value[i]
                            : "#"
                    }
                }
                else {
                    self.cardUserNumber.classList.remove('card-border')
                    self.cardNumber.classList.add('error-border')
                    self.cardError.classList.add('show')
                }
            })

            self.cardNumber.addEventListener('blur', function () {
                self.cardUserNumber.classList.remove('card-border')

            })
            self.cardBgs.forEach(function (e) {
                e.addEventListener('click', function (e) {
                    [...self.card.classList].filter(function (e) {
                        return e.startsWith('card-bg')
                    }).forEach(function (e) {
                        self.card.classList.remove(e)

                    })
                    var target = e.target
                    var targetBg = target.classList[target.classList.length - 1]
                    self.card.classList.add(targetBg)
                })
            })

            self.month.addEventListener('change', function(e){
                self.cardDate.classList.add('card-border')
                self.cardMonth.innerText = self.month.value
            })
            self.year.addEventListener('change', function(e){
                self.cardDate.classList.add('card-border')
                self.cardYear.innerText = self.year.value
            })
            self.month.addEventListener('blur', function () {
                self.cardDate.classList.remove('card-border')

            })
            self.year.addEventListener('blur', function () {
                self.cardDate.classList.remove('card-border')

            })
            self.pageCvv.addEventListener('input', function(){
                var regNumber = (/[^0-9]/g)
                if(!regNumber.test(self.pageCvv.value)){
                    var spanCvv = document.createElement('span')
                    spanCvv.innerText = '*'
                      self.cardCvv.appendChild(spanCvv)
                }
            })
            self.pageCvv.addEventListener('focus', function(){
                self.cardFront.classList.add('hide')
                self.cardBack.classList.remove('hide')       
            })
            self.pageCvv.addEventListener('blur', function(){
                self.cardFront.classList.remove('hide')
                self.cardBack.classList.add('hide')       
            })
            self.cardBgFlag.addEventListener('click', function () {
                if (self.cardBgWrap.classList.contains('card-bg-wrapper_new-position')) {
                    self.cardBgWrap.classList.remove('card-bg-wrapper_new-position')
                }
                else {
                    self.cardBgWrap.classList.add('card-bg-wrapper_new-position')

                }
            })

        },

        optionMonth: function () {
            for (var i = 1; i < 13; i++) {
                var option = document.createElement('option');
                i < 10
                ? option.innerText = "0" + i 
                : option.innerText = i;
                this.month.appendChild(option)
            }
            return this.month
        },
        optionYear: function () {
            for (var i = new Date().getUTCFullYear(); i < new Date().getUTCFullYear() + 20; i++) {
                var option = document.createElement('option');
                option.innerText = i;
                this.year.appendChild(option)
            }
            return this.year
        }


    };
    card.init()


})();

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
            this.cardErrorName = document.querySelector('.error-message-name');
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
            this.buttonSubmit = document.querySelector('#button-submit')
            this.nameFlag  = false
            this.numberFlag  = false
            this.monthFlag  = false
            this.yearFlag  = false
            this.cvvFlag  = false
            this.cardBgs = [];
            this.formSubmit = {}
            document.querySelectorAll(".card-bg").forEach(e => this.cardBgs.push(e))

        },
        bindEvent: function () {
            var self = this;

            self.cardName.addEventListener('input', function () {
                var regNumber = (/[0-9]/g)
                self.cardUserNameWr.classList.add('card-border')
                if (self.cardName.value.length > 0) {
                    if (!regNumber.test(self.cardName.value)) {
                        self.buttonSubmit.classList.remove('button-error')
                        self.cardUserName.innerText = self.cardName.value
                        self.cardNumber.classList.remove('error-border');
                        self.cardErrorName.classList.remove('show')
                        self.nameFlag = true
                    }
                    else {
                        self.cardName.value = self.cardName.value.replace(regNumber, '')
                        self.cardUserNameWr.classList.remove('card-border');
                        self.cardName.classList.add('error-border');
                        self.cardErrorName.classList.add('show')
                        self.nameFlag = false
                    }
                }
                else {
                    self.cardUserName.innerText = 'FULL NAME'
                    self.nameFlag = false

                }
            })
            self.cardName.addEventListener('blur', function () {
                self.formSubmit.name = self.cardName.value

                self.cardUserNameWr.classList.remove('card-border')

            })

            self.cardNumber.addEventListener('input', function (e) {
                
                var regString = /[-\.;":'/a-zA-Zа-яА-Я ]/
                self.cardError.classList.remove('show')
                self.cardNumber.classList.remove('error-border')
                if (!regString.test(self.cardNumber.value)) {
                    self.buttonSubmit.classList.remove('button-error')
                    self.numberFlag = true
                    self.cardUserNumber.classList.add('card-border')
                    for (var i = 0; i < self.cardNumberElement.length; i++) {
                        self.cardNumberElement[i].innerText = self.cardNumber.value[i]
                            ? self.cardNumber.value[i]
                            : "#"
                    }
                 
                }
                else {
                    self.cardNumber.value = self.cardNumber.value.replace(regString, '')
                    self.cardUserNumber.classList.remove('card-border')
                    self.cardNumber.classList.add('error-border')
                    self.cardError.classList.add('show')
                    self.numberFlag = false
                }

            })

            self.cardNumber.addEventListener('blur', function () {
                self.formSubmit.cardNumber = self.cardNumber.value
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

            self.month.addEventListener('change', function (e) {
                self.buttonSubmit.classList.remove('button-error')
                self.monthFlag = true
                self.cardDate.classList.add('card-border')
                self.cardMonth.innerText = self.month.value
            })
            self.year.addEventListener('change', function (e) {
                self.buttonSubmit.classList.remove('button-error')
                self.yearFlag = true
                self.cardDate.classList.add('card-border')
                self.cardYear.innerText = self.year.value
            })
            self.month.addEventListener('focus', function (e) {
                self.cardDate.classList.add('card-border')
            })
            self.year.addEventListener('focus', function (e) {
                self.cardDate.classList.add('card-border')
            })
            self.month.addEventListener('blur', function () {
                self.formSubmit.month = self.month.value
                self.cardDate.classList.remove('card-border')

            })
            self.year.addEventListener('blur', function () {
                self.formSubmit.year = self.year.value
                self.cardDate.classList.remove('card-border')

            })
            self.pageCvv.addEventListener('input', function () {
                var regString = /[-\.;":'/a-zA-Zа-яА-Я ]/

                if (!regString.test(self.pageCvv.value)) {
                    self.buttonSubmit.classList.remove('button-error')
                    self.cvvFlag  =true
                    
                    self.pageCvv.classList.remove('error-border')
                    var spanCvv = document.createElement('span')
                    spanCvv.innerText = '*'

                    if (self.cardCvv.childElementCount < self.pageCvv.value.length) {
                        self.cardCvv.appendChild(spanCvv)
                    }
                    else {
                        self.cardCvv.removeChild(self.cardCvv.children[self.cardCvv.children.length - 1])
                    }

                }
                else {
                    self.cvvFlag = false
                    self.pageCvv.value = self.pageCvv.value.replace(regString, '')
                    self.pageCvv.classList.add('error-border')
                }

            })
            self.pageCvv.addEventListener('focus', function () {
                self.card.classList.add('is-flipped')
            })
            self.pageCvv.addEventListener('blur', function () {
                self.formSubmit.pageCvv = self.pageCvv.value
                console.log(self.formSubmit)
                self.card.classList.remove('is-flipped')
            })

            self.pageCvv.addEventListener('focus', function () {
                self.cardFront.classList.add('hide')
                self.cardBack.classList.remove('hide')
            })
            self.pageCvv.addEventListener('blur', function () {
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
            self.buttonSubmit.addEventListener('click', function () {
               
                if(self.nameFlag && (self.numberFlag && self.cardNumber.value.length === 16) && self.monthFlag && self.yearFlag && (self.cvvFlag && self.pageCvv.value.length === 3)){
                    
                    fetch('https://httpbin.org/post', {
                        method: 'post',
                        headers: {
                            'Accept': 'application/json, text/plain, */*',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify( self.formSubmit )
                    }).then(res => res.json())
                        .then(res => console.log(res));
                        alert('Congratulations! Your data has been sent!')
                }
                else{
                    self.buttonSubmit.classList.add('button-error')
                    return false
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

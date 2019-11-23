(function () {
    var card = {
        init: function () {
            this.initVar();
            this.bindEvent();
            
        },
        initVar: function () {
            this.card = document.querySelector(".card")
            this.cardName = document.querySelector('*[name="card-name"]');
            this.cardUserName = document.querySelector('*[name="card-user-name"]');
            this.cardBgFlag = document.querySelector(".card-bg-flag");
            this.cardBgWrap = document.querySelector(".card-bg-wrapper");
            this.cardClassLength = 1
            this.cardBgs = [];
            document.querySelectorAll(".card-bg").forEach(e=> this.cardBgs.push(e))
        },
        bindEvent: function () {
            var self = this;

            self.cardName.addEventListener('input', function () {
                self.cardUserName.innerHTML = self.cardName.value

            })
            self.cardBgFlag.addEventListener('click',function(){
                self.cardBgWrap.classList.add('card-bg-wrapper_new-position')
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
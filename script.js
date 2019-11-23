(function () {
    var card = {
        init: function () {
            this.initVar();
            this.bindEvent()
        },
        initVar: function () {
            this.card = document.querySelector(".card")
            this.cardName = document.querySelector('*[name="card-name"]');
            this.cardUserName = document.querySelector('*[name="card-user-name"]');
            this.cardBgFlag = document.querySelector(".card-bg-flag");
            this.cardBgWrap = document.querySelector(".card-bg-wrapper");
            this.cardBg = document.querySelector(".card-bg-1")
            this.cardBg2 = document.querySelector(".card-bg-2")
            this.cardBg3 = document.querySelector(".card-bg-3")
            this.cardBg4 = document.querySelector(".card-bg-4")
            this.cardBg5 = document.querySelector(".card-bg-5")

        },
        bindEvent: function () {
            var self = this;
            self.cardName.addEventListener('input', function () {
                self.cardUserName.innerHTML = self.cardName.value

            })
            self.cardBgFlag.addEventListener('click',function(){
                self.cardBgWrap.classList.add('card-bg-wrapper_new-position')
            }) 
            self.cardBg.addEventListener('click', function(e){
                self.card.classList.add("card-bg-1")
            }) 
            self.cardBg2.addEventListener('click', function(e){
                self.card.classList.add("card-bg-2")
            }) 
            self.cardBg3.addEventListener('click', function(e){
                self.card.classList.add("card-bg-3")
            }) 
            self.cardBg4.addEventListener('click', function(e){
                self.card.classList.add("card-bg-4")
            }) 
            self.cardBg5.addEventListener('click', function(e){
                self.card.classList.add("card-bg-5")
            })  
        }
    };
    card.init()
})();
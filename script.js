new Vue({
	el: '#desafio',
	data: {
         playerLife: 100,
         monsterLife: 100,
         console: false,
         logs:[]
     },
	
	 methods: {
           
            iniciar(){
                this.console = true
                this.playerLife = 100
                this.monsterLife = 100
                this.logs = []
            },
            restart(){
                this.playerLife = 100
                this.monsterLife = 100
                this.console = !this.console
            },
            //--------------------------------------------------------------------//
           
            getRandom(min, max){
                const value = Math.random() * (min-max) + min
                return Math.round(value)
               console.log(this.getRandom())
               
             },  
            attack(especial){
                 this.hurt('playerLife',7, 10, false,'jogador','Monstro', 'luta')
                 if(this.monsterLife > 0){
                    this.hurt('monsterLife',7, 12, especial, 'Monstro', 'Jogador','luta1')
                 }
            },
            
            hurt(attr, min,max,especial,source,target,cls){
                const plus = especial ? 5 : 0
                const hurt = this.getRandom(min + plus, max + plus)
                this[attr] = Math.max(this[attr] - hurt, 0)
                this.registerLog(`${source} atingiu o ${target} com ${hurt}.`, cls)
            },
             //----------------------------------------------------------------------//
            
             healAnHurt(){
                this.heal(10,15)
                this.hurt('playerLife',7, 12, false, 'Monstro', 'Jogador', 'luta1' )
            },
            heal(min,max){
                const life = this.getRandom(min, max)
                this.playerLife = Math.min(this.playerLife + life, 100)
                this.registerLog(`Jogador ganhou life de ${life}.`, 'luta')
            },
          //----------------------------------------------------------------------//

            registerLog(text, cls){
            this.logs.unshift({text , cls})
            }          
            },
         //----------------------------------------------------------------------//

     computed:{
            hasResult(){
               return this.playerLife == 0 || this.monsterLife <= 0 
                    },
            },
         //----------------------------------------------------------------------//
     watch:{
             hasResult(value){
                if(value){
                 this.console = false     
                }
                }
            }    
        })

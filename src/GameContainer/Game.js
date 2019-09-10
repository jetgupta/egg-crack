import React from 'react';
import '../App.css'
import Egg from './Egg.js';
import Description from './Description.js';
import Points from './Points.js';
import Round from './Round.js';
import NextRoundButton from './NextRoundButton';

let randomNumberBetween = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Game extends React.Component{
    constructor(props){
        super(props);
        //Set the egg array up
        let tempEggs = Array(this.props.eggNumber).fill(null);
        for (let i = 0; i < this.props.eggNumber; i++){
    
            tempEggs[i]={id: i, golden: false, state: 'nothing', easter: false};
        }


        this.state = {
            points: 0,
            round: 1,
            eggs: tempEggs,
            step: 'pick',
        };

        this.handleEggClick = this.handleEggClick.bind(this);
        this.handleNextRoundClick = this.handleNextRoundClick.bind(this);


    }
    componentDidMount(){
        //once everything is set up, select a golden egg
        this.setGold();
    }

    
    createEgg = (egg) => {
        return <Egg  key={egg.id} 
                    golden={egg.golden} 
                    onClick={() => this.handleEggClick(egg.id)}
                    state={egg.state}
                    easter={egg.easter}
                />;
    }

    createEggs = () => {
        return this.state.eggs.map(this.createEgg);
    }

    setGold(){
        let eggs = this.state.eggs.slice();
        let goldenEgg = randomNumberBetween(0,(this.props.eggNumber-1));
        //make sure to reset all the eggs before settings the golden one
        for (let i = 0; i < this.props.eggNumber; i++){
            eggs[i].golden=false;
            eggs[i].state='nothing'
            let easterNumber=randomNumberBetween(1,300);
            if (easterNumber===69){
                eggs[i].easter=true;
            }
        }
        eggs[goldenEgg].golden=true;
    
        this.setState({
            eggs: eggs,
        });
    }

    handleEggClick(egg){
        let eggs = this.state.eggs.slice();
        if (this.state.step==='pick'){
            eggs[egg].state='cracked';
            this.setState({
                step: 'choice',
                eggs: eggs,
            });
            this.revealEmptyEggs(egg);

        }
        if (this.state.step==='choice'){

            this.revealTruth(egg);
        }
    }

    revealEmptyEggs(egg){
        let eggs = this.state.eggs.slice();
        let eggList = [];
        for (let i=0; i <eggs.length; i++){
            if ((eggs[i].state!=='cracked') && (!eggs[i].golden))
            {
                eggs[i].state='open';
                eggList.push(eggs[i].id);
            }
        }
        if (eggs[egg].golden){
            if(eggList.length>0){
                let randomNumber = randomNumberBetween(0, (eggList.length-1));
                let id = eggList[randomNumber];
                eggs[id].state='nothing';
            }
        }

        this.setState({
            eggs: eggs,
        })
    }

    handleNextRoundClick(){

        this.setState({
            step: 'pick',
            round: this.state.round + 1,
        });
        let eggs = this.state.eggs.slice();
        for(let i = 0; i < eggs.length; i++){
            eggs[i].state='nothing';
        }
        this.setState({
            eggs: eggs,
        });
        this.setGold();
    }

    revealTruth(egg){
        let eggs = this.state.eggs.slice();
        if (eggs[egg].golden===true){
            eggs[egg].state='open';
            this.setState({
                step: 'correct',
                points: this.state.points + 1,
                eggs: eggs,
            })
        }
        else{
            eggs[egg].state='open';
            this.setState({
                step: 'incorrect',
                eggs: eggs,
            })
        }
    }

    render(){
        return(
            <div className='Game'>
                <div className='points-container'>
                    <Points points={this.state.points} />
                </div>
                <div className='round-container'>
                    <Round round={this.state.round} />
                </div>
                <div className='eggs-container'>
                    {this.createEggs()}
                </div>
                <div className='description-container'>
                    <Description step={this.state.step} plural={this.state.eggs.length>3} />
                </div>
                <div className='next-round-button'>
                    <NextRoundButton onClick={this.handleNextRoundClick} step={this.state.step} />
                </div>
            </div>
        );
    }
}



export default Game;
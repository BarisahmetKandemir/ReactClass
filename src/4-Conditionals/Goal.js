import React from 'react'
import MadeGaol from './MadeGaol'
import MissedGoal from './MissedGoal'

const Goal = (probs) => {

    const isGoal = probs.isGoal

    // if(isGoal){
    //    return<MadeGaol/>
       
    // }
    // else{
    //   return<MissedGoal/>
    // }

    return <>{isGoal ? <MadeGaol/> : <MissedGoal/>}</>
    //ikisi aynı ifadedir.
}

export default Goal
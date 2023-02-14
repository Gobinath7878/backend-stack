import Questions from "../models/Questions.js"
import Answers from '../models/Answers.js'


export const createAnswers = async (req,res)=>{

    const questionsId =req.params.questionsId
    const newAnswers = new Answers({...req.body})
    try{

       const savedAnswers = await newAnswers.save()

       await Questions.findByIdAndUpdate(questionsId,{
        $push: {answers: savedAnswers._id}
       })
        
       res.status(200).json({success:true, message:'Answer submitted',
    data: savedAnswers})

    } catch(err){
        console.log(err)
        res.status(500).json({success:false, message:'Failed to submit',
        })
    }
}

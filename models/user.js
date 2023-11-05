import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        //!principalInfo
       
        
        email:{
            type:String,
            required:true
        },
        gametag:{
            type:String,
            required:true
        },
        pictureTrainer:{
            type:String,
            required:true
        },
        theme:{
            type:String,
            required:true
        },
        experience:{
            type:Number,
            required:true
        },
        level:{
            type:Number,
            required:true
        },
        league:{
            type:Number,
            required:true
        },
        fractionLevel:{
            type:Number,
            required:true
        },
        //!economy

        coins:{
            type:Number,
            required:true
        },
        pokeballs:{
            type:Number,
            required:true
        },
        bagPokemons:{
            type:Number,
            required:true
        },
        box:{
            type:Number,
            required:true
        },
         tickets:{
            type:Number,
            required:false
        },
        //! stadistics
        wins:{
            type:Number,
            required:true
        },
        loss:{
            type:Number,
            required:true
        },
        
        
       
        phone:{
            type:Number,
            required:false
        },
        addmin:{
            type:Boolean,
            required:false
        },
    },{
        timestamps:true,
        versionKey:false
    }
);

export default mongoose.models.user || mongoose.model("user", userSchema);
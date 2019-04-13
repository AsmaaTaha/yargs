module.exports=(nameOdOperation,...args)=>{

    for (let index = 0; index < args.length; index++) {
      if ((isNaN(args[index]))|| (nameOdOperation=="div" && args[1]==0))
      {
          return false
      }
        
    }
    return true;
};
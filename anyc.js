const{readFile,writeFile}=require('fs')
readFile('./content/subfolder/first.txt','utf8',(err,result)=>
{
    if(err)
    {
        console.log(err);
        return;
    }
    const first=result
    readFile('./content/subfolder/sec.txt','utf8',(err,result)=>
    {
        if(err)
        {
            console.lof(err);
            return

        }
        const sec=result
        writeFile('./content/asyn.txt',`here is res:: ${first},${sec}`,(err,result)=>
        {
            if(err)
            { 
               console.log(err)
                return
            }
            console.log(result)
        })
    })
})
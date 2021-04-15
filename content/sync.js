const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./content/subfolder/first.txt','utf8');
const sec=readFileSync('./content/subfolder/sec.txt')
console.log(first)
writeFileSync(
    './content/res.txt',
    `here is the rest : ${first},${sec}`,
    {flag:'a' }
)
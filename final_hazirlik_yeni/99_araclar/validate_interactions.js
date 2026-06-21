const fs=require("fs"); const vm=require("vm");
function cls(){const s=new Set();return{add:x=>s.add(x),remove:x=>s.delete(x),toggle:x=>s.has(x)?s.delete(x):s.add(x),contains:x=>s.has(x)}}
const elements={dashboard:{innerHTML:""},resultCount:{textContent:""},questions:{innerHTML:""},"exp-smoke":{classList:cls()}};
const storage={};
const sandbox={console,setTimeout,localStorage:{getItem:k=>storage[k]||null,setItem:(k,v)=>storage[k]=String(v)},document:{getElementById:id=>elements[id]||(elements[id]={innerHTML:"",textContent:"",value:"",checked:false,classList:cls(),addEventListener(){}}),querySelectorAll:()=>[],addEventListener(){}},window:{},confirm:()=>true};
sandbox.globalThis=sandbox; vm.createContext(sandbox);
vm.runInContext(fs.readFileSync("02_INTERAKTIF_SISTEM/app.js","utf8"), sandbox);
if(!Array.isArray(sandbox.window.QUESTIONS)||sandbox.window.QUESTIONS.length<150) throw new Error("QUESTIONS yok");
sandbox.toggleExplain("smoke"); if(!elements["exp-smoke"].classList.contains("visible")) throw new Error("toggleExplain show failed");
sandbox.toggleExplain("smoke"); if(elements["exp-smoke"].classList.contains("visible")) throw new Error("toggleExplain hide failed");
const id=sandbox.window.QUESTIONS[0].id; sandbox.toggleFav(id); let p=JSON.parse(storage["pd-final-progress-v2"]); if(!p[id].favorite) throw new Error("fav failed");
sandbox.record(id,"wrong"); p=JSON.parse(storage["pd-final-progress-v2"]); if(p[id].status!=="wrong") throw new Error("record failed");
console.log(JSON.stringify({status:"ok", testedQuestion:id}, null, 2));

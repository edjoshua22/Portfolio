"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

interface Cert { id:string; title:string; issuer:string; date:string; hours?:string; certCode?:string; description:string; pdfUrl:string; theme:"freecodecamp"|"simplilearn"; accent:string; glow:string; }

const CERTS: Cert[] = [
  { id:"c1", title:"Scientific Computing with Python", issuer:"freeCodeCamp", date:"April 27, 2026", hours:"300", description:"Python fundamentals, data structures, algorithms and scientific computing through hands-on certification projects.", pdfUrl:"/cert-python.pdf", theme:"freecodecamp", accent:"#00fff0", glow:"rgba(0,255,240,0.5)" },
  { id:"c2", title:"Responsive Web Design", issuer:"freeCodeCamp", date:"May 21, 2026", hours:"300", description:"Modern HTML5 & CSS3 for fully responsive, accessible, cross-browser compatible web interfaces.", pdfUrl:"/cert-responsive-web-design.pdf", theme:"freecodecamp", accent:"#ff00ff", glow:"rgba(255,0,255,0.5)" },
  { id:"c3", title:"Introduction to Cyber Security", issuer:"Simplilearn SkillUP", date:"2nd June 2026", certCode:"10296593", description:"Cybersecurity principles, threat identification, network security and digital system protection best practices.", pdfUrl:"https://certificates.simplicdn.net/share/10296593_10589620_1780362609617.pdf", theme:"simplilearn", accent:"#39ff14", glow:"rgba(57,255,20,0.5)" },
  { id:"c4", title:"ReactJS for Beginners", issuer:"Simplilearn SkillUP", date:"2nd June 2026", certCode:"10297525", description:"Core React concepts including components, hooks, state management, props, and building interactive SPAs with modern best practices.", pdfUrl:"https://certificates.simplicdn.net/share/10297525_10589620_1780426380460.pdf", theme:"simplilearn", accent:"#61dafb", glow:"rgba(97,218,251,0.5)" },
];

const CSS = `
@keyframes shimmer{0%{left:-60%}100%{left:130%}}
@keyframes scanline{0%{top:-4px}100%{top:102%}}
@keyframes bloomPulse{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:.8;transform:scale(1.06)}}
@keyframes floatUp{0%{transform:translateY(0) scale(1);opacity:.8}100%{transform:translateY(-130px) scale(.2);opacity:0}}
@keyframes glitch{0%,88%,100%{clip-path:none;transform:none}89%{clip-path:polygon(0 20%,100% 20%,100% 40%,0 40%);transform:translateX(-3px)}91%{clip-path:polygon(0 60%,100% 60%,100% 80%,0 80%);transform:translateX(3px)}93%{clip-path:none;transform:none}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
@keyframes tabPulse{0%,100%{box-shadow:none}50%{box-shadow:var(--tab-glow)}}
`;

function FccCover({ title, date, hours }: { title:string; date:string; hours?:string }) {
  return (
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",fontFamily:"monospace"}}>
      <div style={{background:"#f0ebe3",padding:"14px 24px",textAlign:"center",flexShrink:0,borderBottom:"2px solid #d4cfc7"}}>
        <span style={{fontSize:"clamp(13px,2vw,18px)",fontWeight:700,color:"#0a0a23",letterSpacing:".02em"}}>freeCodeCamp(🔥)</span>
      </div>
      <div style={{background:"#0a0a23",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 32px",textAlign:"center",gap:7}}>
        <p style={{color:"#bbb",fontSize:"clamp(8px,1.2vw,12px)",fontFamily:"sans-serif",margin:0}}>This certifies that</p>
        <p style={{color:"#f0ebe3",fontSize:"clamp(16px,2.6vw,26px)",fontWeight:700,fontFamily:"sans-serif",margin:0}}>Ed Joshua Ligan</p>
        <p style={{color:"#bbb",fontSize:"clamp(8px,1.2vw,12px)",fontFamily:"sans-serif",margin:0}}>successfully completed the</p>
        <p style={{color:"#f0ebe3",fontSize:"clamp(14px,2.2vw,22px)",fontWeight:700,fontFamily:"sans-serif",margin:0,lineHeight:1.25}}>{title}</p>
        <p style={{color:"#aaa",fontSize:"clamp(8px,1.1vw,11px)",fontFamily:"sans-serif",margin:0}}>Developer Certification on {date}</p>
        {hours&&<p style={{color:"#555",fontSize:"clamp(7px,1vw,10px)",fontFamily:"sans-serif",margin:0}}>representing approximately {hours} hours of work</p>}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",width:"100%",marginTop:20,paddingTop:16,borderTop:"1px solid #1e1e3a"}}>
          <svg viewBox="0 0 40 40" style={{width:"clamp(30px,5vw,48px)",height:"clamp(30px,5vw,48px)",flexShrink:0,background:"#f0ebe3",padding:2}}>
            <rect x="2" y="2" width="14" height="14" fill="#0a0a23"/><rect x="4" y="4" width="10" height="10" fill="#f0ebe3"/><rect x="6" y="6" width="6" height="6" fill="#0a0a23"/>
            <rect x="24" y="2" width="14" height="14" fill="#0a0a23"/><rect x="26" y="4" width="10" height="10" fill="#f0ebe3"/><rect x="28" y="6" width="6" height="6" fill="#0a0a23"/>
            <rect x="2" y="24" width="14" height="14" fill="#0a0a23"/><rect x="4" y="26" width="10" height="10" fill="#f0ebe3"/><rect x="6" y="28" width="6" height="6" fill="#0a0a23"/>
            <rect x="22" y="22" width="4" height="4" fill="#0a0a23"/><rect x="28" y="26" width="4" height="4" fill="#0a0a23"/><rect x="34" y="30" width="4" height="6" fill="#0a0a23"/>
          </svg>
          <div style={{textAlign:"center"}}>
            <p style={{color:"#f0ebe3",fontSize:"clamp(14px,2vw,20px)",margin:"0 0 4px",fontStyle:"italic",letterSpacing:".02em"}}>Quincy Larson</p>
            <div style={{height:1,background:"#333",marginBottom:5,width:"80%",margin:"0 auto 5px"}}/>
            <p style={{color:"#888",fontSize:"clamp(7px,1vw,10px)",fontFamily:"sans-serif",margin:0}}>Quincy Larson</p>
            <p style={{color:"#666",fontSize:"clamp(6px,.9vw,9px)",fontFamily:"sans-serif",margin:0}}>Executive Director, freeCodeCamp.org</p>
          </div>
          <svg viewBox="0 0 50 70" style={{width:"clamp(28px,4.5vw,46px)",height:"auto",flexShrink:0}} fill="#f0ebe3">
            <circle cx="25" cy="25" r="22" fill="none" stroke="#f0ebe3" strokeWidth="2.5"/>
            <circle cx="25" cy="25" r="15" fill="none" stroke="#f0ebe3" strokeWidth="1.5"/>
            <polygon points="25,12 27.5,20 36,20 29.5,25 32,33 25,28 18,33 20.5,25 14,20 22.5,20"/>
            <rect x="18" y="47" width="14" height="6" rx="1.5"/>
            <path d="M19 50 L21 63 L25 59 L29 63 L31 50" fill="#f0ebe3"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SimplilearnCover({ title, date, certCode }: { title:string; date:string; certCode?:string }) {
  return (
    <div style={{width:"100%",height:"100%",background:"#fff",position:"relative",overflow:"hidden",display:"flex"}}>
      <div style={{position:"absolute",left:0,top:0,width:7,height:"65%",background:"#1a73e8",zIndex:1}}/>
      <div style={{position:"absolute",left:0,top:0,width:"58%",height:7,background:"#1a73e8",zIndex:1}}/>
      <div style={{position:"absolute",left:0,bottom:0,width:7,height:"42%",background:"#f5a623",zIndex:1}}/>
      <div style={{position:"absolute",left:0,bottom:0,width:"42%",height:7,background:"#f5a623",zIndex:1}}/>
      <div style={{position:"absolute",right:0,top:0,width:"18%",height:"100%",background:"#1a2980",zIndex:1}}>
        <div style={{position:"absolute",left:"26%",top:0,width:"9%",height:"100%",background:"#d4af37"}}/>
        <div style={{position:"absolute",left:"48%",top:0,width:"6%",height:"100%",background:"#d4af37",opacity:.5}}/>
      </div>
      <div style={{position:"relative",zIndex:2,padding:"20px 24px",width:"82%",display:"flex",flexDirection:"column",gap:6}}>
        <div style={{fontFamily:"sans-serif",fontSize:"clamp(9px,1.4vw,13px)",fontWeight:700,marginBottom:4}}>
          <span style={{color:"#e74c3c"}}>simpli</span><span style={{color:"#3498db"}}>learn</span>
          <span style={{color:"#bbb",margin:"0 6px"}}>|</span>
          <span style={{color:"#2c3e50"}}>Skill</span><span style={{color:"#f39c12"}}>UP</span>
        </div>
        <p style={{color:"#777",fontSize:"clamp(7px,1vw,10px)",fontFamily:"sans-serif",margin:0,textTransform:"uppercase",letterSpacing:".14em"}}>Certificate of</p>
        <p style={{color:"#2c3e50",fontSize:"clamp(18px,3.5vw,32px)",fontWeight:900,fontFamily:"sans-serif",margin:0,textTransform:"uppercase",lineHeight:1.05,letterSpacing:".03em"}}>Completion</p>
        <div style={{height:1,background:"#e8e8e8",margin:"6px 0"}}/>
        <p style={{color:"#2c3e50",fontSize:"clamp(13px,2.2vw,20px)",fontWeight:600,fontFamily:"sans-serif",margin:0,borderBottom:"1px dotted #ccc",paddingBottom:5}}>Ed Joshua Ligan</p>
        <p style={{color:"#888",fontSize:"clamp(7px,1vw,10px)",fontFamily:"sans-serif",margin:0}}>has successfully completed the online course:</p>
        <p style={{color:"#2c3e50",fontSize:"clamp(9px,1.5vw,14px)",fontWeight:700,fontFamily:"sans-serif",margin:0}}>{title}</p>
        <p style={{color:"#999",fontSize:"clamp(7px,.95vw,9px)",fontFamily:"sans-serif",margin:"4px 0 0",lineHeight:1.5}}>This professional has demonstrated initiative and a commitment to deepening their skills and advancing their career. Well done!</p>
        <div style={{marginTop:"auto",paddingTop:8,borderTop:"1px solid #f0f0f0",display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
          <div>
            <p style={{color:"#666",fontSize:"clamp(7px,.9vw,9px)",fontFamily:"sans-serif",margin:0}}>{date}</p>
            {certCode&&<p style={{color:"#666",fontSize:"clamp(7px,.9vw,9px)",fontFamily:"sans-serif",margin:0}}>Certificate code: {certCode}</p>}
          </div>
          <div style={{textAlign:"right"}}>
            <p style={{color:"#2c3e50",fontSize:"clamp(8px,1.1vw,11px)",fontWeight:600,fontFamily:"sans-serif",margin:0}}>Krishna Kumar</p>
            <p style={{color:"#888",fontSize:"clamp(6px,.85vw,8px)",fontFamily:"sans-serif",margin:0}}>CEO, Simplilearn</p>
          </div>
        </div>
      </div>
      <div style={{position:"absolute",right:"20%",bottom:"12%",zIndex:3}}>
        <div style={{width:"clamp(44px,7vw,64px)",height:"clamp(44px,7vw,64px)",borderRadius:"50%",background:"radial-gradient(circle,#f7e07a,#d4af37)",border:"3px solid #b8860b",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 12px rgba(0,0,0,0.3)"}}>
          <span style={{color:"#1a2980",fontWeight:900,fontSize:"clamp(14px,2.2vw,20px)"}}>✓</span>
        </div>
      </div>
    </div>
  );
}

const PARTICLES = [{l:"12%",d:"0s",s:3},{l:"28%",d:".7s",s:2},{l:"45%",d:".3s",s:4},{l:"62%",d:"1s",s:2},{l:"78%",d:".5s",s:3},{l:"91%",d:"1.3s",s:2}];

export default function Certificates() {
  const [activeId, setActiveId] = useState("c1");
  const active = CERTS.find(c => c.id === activeId)!;

  return (
    <SectionWrapper id="certificates">
      <style dangerouslySetInnerHTML={{__html:CSS}}/>
      <div className="max-w-5xl mx-auto px-6">

        <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5}} className="mb-2">
          <span className="section-label text-glow-green">{">"} IT_CERTIFICATES</span>
        </motion.div>
        <motion.h2 initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.5,delay:.1}} className="section-title text-3xl md:text-4xl mb-12">
          Credentials
        </motion.h2>

        {/* ── Tab navigation ── */}
        <div style={{display:"flex",justifyContent:"center",gap:0,marginBottom:32}}>
          {CERTS.map((cert,i)=>{
            const on=cert.id===activeId;
            return (
              <motion.button key={cert.id} onClick={()=>setActiveId(cert.id)} whileHover={{y:-2}} whileTap={{scale:.97}}
                style={{padding:"10px 24px",background: on ? cert.accent+"14" : "transparent",border:`1px solid ${cert.accent}${on?"88":"22"}`,borderRight: i<CERTS.length-1?"none":"1px solid "+cert.accent+(on?"88":"22"),color: on ? cert.accent : cert.accent+"55",fontFamily:"monospace",fontSize:9,fontWeight:600,letterSpacing:".2em",textTransform:"uppercase",cursor:"pointer",transition:"all .3s",position:"relative",overflow:"hidden",
                  boxShadow: on ? `0 0 20px ${cert.glow.replace(".5",".25")}, inset 0 0 20px ${cert.accent}08` : "none"}}>
                {on&&<div style={{position:"absolute",bottom:0,left:0,right:0,height:2,background:cert.accent,boxShadow:`0 0 8px ${cert.accent}`}}/>}
                {cert.title.split(" ").slice(-1)[0]}
              </motion.button>
            );
          })}
        </div>

        {/* ── Centered cert display ── */}
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.7}} style={{position:"relative"}}>

          {/* Ambient bloom */}
          <div style={{position:"absolute",inset:"-80px",background:`radial-gradient(ellipse 60% 55% at 50% 50%, ${active.glow.replace(".5",".15")}, transparent 70%)`,animation:"bloomPulse 3s ease-in-out infinite",transition:"background .7s ease",pointerEvents:"none",zIndex:0}}/>

          {/* Paper container — centered */}
          <div style={{position:"relative",zIndex:1,maxWidth:760,margin:"0 auto"}}>
            <AnimatePresence mode="wait">
              <motion.div key={activeId}
                initial={{rotateX:-12,opacity:0,y:30,scale:.97}}
                animate={{rotateX:0,opacity:1,y:0,scale:1}}
                exit={{rotateX:10,opacity:0,y:-20,scale:.97}}
                transition={{duration:.55,ease:[0.23,1,0.32,1]}}
                style={{
                  aspectRatio:"5/3.3",width:"100%",position:"relative",
                  /* Realistic multi-layer paper shadow */
                  boxShadow:`
                    0 1px 2px rgba(0,0,0,0.07),
                    0 2px 4px rgba(0,0,0,0.07),
                    0 8px 16px rgba(0,0,0,0.18),
                    0 24px 48px rgba(0,0,0,0.36),
                    0 48px 96px rgba(0,0,0,0.28),
                    0 0 0 1px rgba(255,255,255,0.04),
                    0 0 60px ${active.glow.replace(".5",".2")}
                  `,
                  transformStyle:"preserve-3d",
                  borderRadius:2,
                  overflow:"hidden",
                  transition:"box-shadow .6s",
                }}
              >
                {/* Cert face */}
                <div style={{position:"absolute",inset:0}}>
                  {active.theme==="freecodecamp"
                    ? <FccCover title={active.title} date={active.date} hours={active.hours}/>
                    : <SimplilearnCover title={active.title} date={active.date} certCode={active.certCode}/>}
                </div>

                {/* Holographic shimmer */}
                <div style={{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden",zIndex:5}}>
                  <div style={{position:"absolute",top:0,bottom:0,width:"50%",background:`linear-gradient(105deg,transparent 20%,${active.accent}18 50%,transparent 80%)`,animation:"shimmer 4s ease-in-out infinite",animationDelay:".8s"}}/>
                </div>

                {/* Scanline */}
                <div style={{position:"absolute",left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${active.accent}44,transparent)`,animation:"scanline 5s linear infinite",pointerEvents:"none",zIndex:6}}/>

                {/* HUD corners */}
                {([{top:10,left:10,bt:"top",bl:"left"},{top:10,right:10,bt:"top",bl:"right"},{bottom:10,left:10,bt:"bottom",bl:"left"},{bottom:10,right:10,bt:"bottom",bl:"right"}] as any[]).map((pos,i)=>(
                  <div key={i} style={{position:"absolute",...pos,width:20,height:20,borderTop:pos.bt==="top"?`2px solid ${active.accent}`:"none",borderBottom:pos.bt==="bottom"?`2px solid ${active.accent}`:"none",borderLeft:pos.bl==="left"?`2px solid ${active.accent}`:"none",borderRight:pos.bl==="right"?`2px solid ${active.accent}`:"none",zIndex:7,boxShadow:`0 0 8px ${active.accent}66`,transition:"border-color .4s"}}/>
                ))}

                {/* Inner neon frame */}
                <div style={{position:"absolute",inset:0,boxShadow:`inset 0 0 40px ${active.glow.replace(".5","0.15")}`,pointerEvents:"none",zIndex:4,transition:"box-shadow .5s"}}/>

                {/* Floating particles */}
                <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:8}}>
                  {PARTICLES.map((p,i)=>(
                    <div key={i} style={{position:"absolute",bottom:0,left:p.l,width:p.s,height:p.s,borderRadius:"50%",background:active.accent,boxShadow:`0 0 6px ${active.accent}`,animation:`floatUp 3s ease-out infinite`,animationDelay:p.d,opacity:0}}/>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Paper edge depth illusion */}
            <div style={{position:"absolute",bottom:-4,left:"2%",right:"2%",height:4,background:"rgba(0,0,0,0.4)",filter:"blur(4px)",borderRadius:"0 0 4px 4px",zIndex:0}}/>
          </div>

          {/* ── Info strip ── */}
          <AnimatePresence mode="wait">
            <motion.div key={activeId} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.3}}
              style={{maxWidth:760,margin:"24px auto 0",display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:24,padding:"18px 0",borderTop:`1px solid ${active.accent}22`}}>
              <div style={{flex:1}}>
                <p style={{fontFamily:"monospace",fontSize:9,color:active.accent,letterSpacing:".22em",textTransform:"uppercase",margin:"0 0 6px",display:"flex",alignItems:"center",gap:8}}>
                  {active.issuer}
                  <span style={{display:"inline-block",width:2,height:12,background:active.accent,animation:"blink 1s step-end infinite"}}/>
                  <span style={{color:active.accent+"55"}}>· {active.date}</span>
                </p>
                <h3 style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:"clamp(15px,2vw,21px)",color:"#fff",margin:"0 0 8px",letterSpacing:".06em",textTransform:"uppercase",animation:"glitch 7s ease-in-out infinite"}}>
                  {active.title}
                </h3>
                <p style={{fontFamily:"monospace",fontSize:11,color:"#4a6a6a",margin:0,lineHeight:1.75}}>{active.description}</p>
                {active.hours&&<p style={{fontFamily:"monospace",fontSize:9,color:active.accent+"55",margin:"6px 0 0",letterSpacing:".15em"}}>// {active.hours} HOURS OF WORK</p>}
              </div>
              <a href={active.pdfUrl} target="_blank" rel="noopener noreferrer"
                style={{display:"inline-flex",alignItems:"center",gap:8,padding:"12px 26px",border:`1px solid ${active.accent}`,color:active.accent,fontFamily:"monospace",fontSize:10,fontWeight:600,letterSpacing:".18em",textDecoration:"none",textTransform:"uppercase",background:`${active.accent}08`,boxShadow:`0 0 20px ${active.glow.replace(".5","0.35")},inset 0 0 20px ${active.accent}06`,flexShrink:0,whiteSpace:"nowrap"}}>
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
                VIEW_CERTIFICATE
              </a>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

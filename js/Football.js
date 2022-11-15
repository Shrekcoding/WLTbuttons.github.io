let football = [];
        
        const games = (ev)=>{
            ev.preventDefault();  
            let touchDown = {
                
                Date: document.getElementById('date').value,
                HomeTeam: document.getElementById('homeTeam').value,
                AwayTeam: document.getElementById('awayTeam').value,
                HomePoints: document.getElementById('homePoints').value,
                AwayPoints: document.getElementById('awayPoints').value,
              
            }
            football.push(touchDown);
            document.forms[0].reset(); 
            console.warn('added' , {football} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(football, '\t', 2);

            
            localStorage.setItem('MytouchDownList', JSON.stringify(football) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', games);
        });
function increment() {
      document.getElementById('demoInput').stepUp();
   }

   function decrement() {
      document.getElementById('demoInput').stepDown();
   }

function increment1() {
      document.getElementById('demoInput1').stepUp();
   }
   function decrement1() {
      document.getElementById('demoInput1').stepDown();
   }

function increment2() {
      document.getElementById('demoInput2').stepUp();
   }
   function decrement2() {
      document.getElementById('demoInput2').stepDown();
   }
function increment3() {
      document.getElementById('demoInput3').stepUp();
   }

   function decrement3() {
      document.getElementById('demoInput3').stepDown();
   }

function increment4() {
      document.getElementById('demoInput4').stepUp();
   }
   function decrement4() {
      document.getElementById('demoInput4').stepDown();
   }

function increment5() {
      document.getElementById('demoInput5').stepUp();
   }
   function decrement5() {
      document.getElementById('demoInput5').stepDown();
   }
function increment6() {
      document.getElementById('demoInput6').stepUp();
   }

   function decrement6() {
      document.getElementById('demoInput6').stepDown();
   }

function increment7() {
      document.getElementById('demoInput7').stepUp();
   }
   function decrement7() {
      document.getElementById('demoInput7').stepDown();
   }

function increment8() {
      document.getElementById('demoInput8').stepUp();
   }
   function decrement8() {
      document.getElementById('demoInput8').stepDown();
   }
function increment9() {
      document.getElementById('demoInput9').stepUp();
   }

   function decrement9() {
      document.getElementById('demoInput9').stepDown();
   }

function increment10() {
      document.getElementById('demoInput10').stepUp();
   }
   function decrement10() {
      document.getElementById('demoInput10').stepDown();
   }

function increment11() {
      document.getElementById('demoInput11').stepUp();
   }
   function decrement11() {
      document.getElementById('demoInput11').stepDown();
   }
function increment12() {
      document.getElementById('demoInput12').stepUp();
   }

   function decrement12() {
      document.getElementById('demoInput12').stepDown();
   }

function increment13() {
      document.getElementById('demoInput13').stepUp();
   }
   function decrement13() {
      document.getElementById('demoInput13').stepDown();
   }

function increment14() {
      document.getElementById('demoInput14').stepUp();
   }
   function decrement14() {
      document.getElementById('demoInput14').stepDown();
   }
function increment15() {
      document.getElementById('demoInput15').stepUp();
   }

   function decrement15() {
      document.getElementById('demoInput15').stepDown();
   }

function increment16() {
      document.getElementById('demoInput16').stepUp();
   }
   function decrement16() {
      document.getElementById('demoInput16').stepDown();
   }

function increment17() {
      document.getElementById('demoInput17').stepUp();
   }
   function decrement17() {
      document.getElementById('demoInput17').stepDown();
   }
function increment18() {
      document.getElementById('demoInput18').stepUp();
   }

   function decrement18() {
      document.getElementById('demoInput18').stepDown();
   }

function increment19() {
      document.getElementById('demoInput19').stepUp();
   }
   function decrement19() {
      document.getElementById('demoInput19').stepDown();
   }

function increment20() {
      document.getElementById('demoInput20').stepUp();
   }
   function decrement20() {
      document.getElementById('demoInput20').stepDown();
   }
function increment21() {
      document.getElementById('demoInput21').stepUp();
   }

   function decrement21() {
      document.getElementById('demoInput21').stepDown();
   }

function increment22() {
      document.getElementById('demoInput22').stepUp();
   }
   function decrement22() {
      document.getElementById('demoInput22').stepDown();
   }

function increment23() {
      document.getElementById('demoInput23').stepUp();
   }
   function decrement23() {
      document.getElementById('demoInput23').stepDown();
   }
function increment24() {
      document.getElementById('demoInput24').stepUp();
   }

   function decrement24() {
      document.getElementById('demoInput24').stepDown();
   }

function increment25() {
      document.getElementById('demoInput25').stepUp();
   }
   function decrement25() {
      document.getElementById('demoInput25').stepDown();
   }

function increment26() {
      document.getElementById('demoInput26').stepUp();
   }
   function decrement26() {
      document.getElementById('demoInput26').stepDown();
   }
function increment27() {
      document.getElementById('demoInput27').stepUp();
   }

   function decrement27() {
      document.getElementById('demoInput27').stepDown();
   }

function increment28() {
      document.getElementById('demoInput28').stepUp();
   }
   function decrement28() {
      document.getElementById('demoInput28').stepDown();
   }

function increment29() {
      document.getElementById('demoInput29').stepUp();
   }
   function decrement29() {
      document.getElementById('demoInput29').stepDown();
   }
function increment30() {
      document.getElementById('demoInput30').stepUp();
   }

   function decrement30() {
      document.getElementById('demoInput30').stepDown();
   }

function increment31() {
      document.getElementById('demoInput31').stepUp();
   }
   function decrement31() {
      document.getElementById('demoInput31').stepDown();
   }

function increment32() {
      document.getElementById('demoInput32').stepUp();
   }
   function decrement32() {
      document.getElementById('demoInput32').stepDown();
   }
function increment33() {
      document.getElementById('demoInput33').stepUp();
   }

   function decrement33() {
      document.getElementById('demoInput33').stepDown();
   }

function increment34() {
      document.getElementById('demoInput34').stepUp();
   }
   function decrement34() {
      document.getElementById('demoInput34').stepDown();
   }

function increment35() {
      document.getElementById('demoInput35').stepUp();
   }
   function decrement35() {
      document.getElementById('demoInput35').stepDown();
   }
function increment36() {
      document.getElementById('demoInput36').stepUp();
   }

   function decrement36() {
      document.getElementById('demoInput36').stepDown();
   }

function increment37() {
      document.getElementById('demoInput37').stepUp();
   }
   function decrement37() {
      document.getElementById('demoInput37').stepDown();
   }

function increment38() {
      document.getElementById('demoInput38').stepUp();
   }
   function decrement38() {
      document.getElementById('demoInput38').stepDown();
   }
function increment39() {
      document.getElementById('demoInput39').stepUp();
   }

   function decrement39() {
      document.getElementById('demoInput39').stepDown();
   }

function increment40() {
      document.getElementById('demoInput40').stepUp();
   }
   function decrement40() {
      document.getElementById('demoInput40').stepDown();
   }

function increment41() {
      document.getElementById('demoInput41').stepUp();
   }
   function decrement41() {
      document.getElementById('demoInput41').stepDown();
   }
function increment42() {
      document.getElementById('demoInput42').stepUp();
   }

   function decrement42() {
      document.getElementById('demoInput42').stepDown();
   }

function increment43() {
      document.getElementById('demoInput43').stepUp();
   }
   function decrement43() {
      document.getElementById('demoInput43').stepDown();
   }

function increment44() {
      document.getElementById('demoInput44').stepUp();
   }
   function decrement44() {
      document.getElementById('demoInput44').stepDown();
   }
function increment45() {
      document.getElementById('demoInput45').stepUp();
   }

   function decrement45() {
      document.getElementById('demoInput45').stepDown();
   }

function increment46() {
      document.getElementById('demoInput46').stepUp();
   }
   function decrement46() {
      document.getElementById('demoInput46').stepDown();
   }

function increment47() {
      document.getElementById('demoInput47').stepUp();
   }
   function decrement47() {
      document.getElementById('demoInput47').stepDown();
   }

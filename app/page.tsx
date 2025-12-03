import Navbar from "./navbar";

export default function Landing()
{
    return (
        <div className="box-border size-32 p-4">
            <Navbar />
            
            <Main />
        </div>
    );
}


function Main() 
{
  return (
    <section>
      <h1>Yes, that navigation bar has broken background color. yes, I will fix it. Yes, the links do work!</h1>
      <h1>getting this to work on cloudflare pages is genuinely such a nightmare, my sleep is ruined</h1>
    </section>
  );
}

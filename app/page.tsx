import Navbar from "./navbar";

export default function Landing()
{
    return (
        <div className="box-border p-4">
            <Navbar />
            
            <Main />
        </div>
    );
}


function Main() 
{
  return (
    <section>
      <h1>Yes, most things on this website are VERY incomplete and unfinished. It took me a really long time just to get this up and running!</h1>
      <h1>getting this to work on cloudflare pages is genuinely such a nightmare, my sleep is ruined</h1>
    </section>
  );
}

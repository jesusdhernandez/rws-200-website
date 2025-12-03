import Navbar from "../navbar";

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
      <h1>And this one will be about the murals you find at some MTS Trolley Stations!</h1>
    </section>
  );
}

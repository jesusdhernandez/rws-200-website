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
      <h1>This one will be about Chicano Park in San Diego!</h1>
    </section>
  );
}

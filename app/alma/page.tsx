import Navbar from "../navbar";

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
      <h1>This page will be about La Alma in Colorado.</h1>
    </section>
  );
}

import { Button } from "react-bootstrap";

const Home = () => {


  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary">
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;




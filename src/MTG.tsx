import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

const MTG = (props: any) => {
  let baseURL = import.meta.env.VITE_APIURL;

  async function addCardHandler() {
    const response = await fetch(`${baseURL}/api/v1/account/cards`, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        scry_id: `${props.id}`,
        name: `${props.name}`,
        price: `${props.price}`,
        quantity: 1,
      }),
    });
    alert("Added!");
  }

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          listStyle: "none",
        }}
      >
        <ul>
          <img src={props.image} alt="card image" />
          <h2>{props.name}</h2>
          <p>${props.price}</p>
          <Button variant="contained" onClick={addCardHandler}>
            Add to Collection
          </Button>
        </ul>
      </Paper>
    </>
  );
};

export default MTG;

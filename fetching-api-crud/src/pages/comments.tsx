import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "./comments.css";
export default function Comment() {
  const [listdata, setListdata] = useState<any>([]);
  const navigate = useNavigate();

    let deletecomment = (id:number) => {
        axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(() => { console.log("Post Deleted Successfully") })
        .catch((err)=>{console.log(err)})
    }
  let getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setListdata([...res.data]);
        console.log(listdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="Home">
        <div className="main-body">
          <h1>Comments</h1>
          <h1>
            <Button
              onClick={() => {
                navigate("/add");
              }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Add Post
            </Button>
          </h1>
          <div className="mid">
            <div className="card-container">
              {listdata.map((x: any, i: any) => (
                <div
                  className="p-2 m-2 border border-dark rounded "
                  style={{ backgroundColor: "lightblue" }}
                  key={i}
                >
                  <h4>Name: {x.name}</h4>
                  <p>
                    <span
                      style={{
                        fontWeight: "bolder",
                      }}
                    >
                      POST ID: 
                    </span> 
                     {x.postId}
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "bolder",
                      }}
                    >
                      ID:
                    </span>
                    {x.id}
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "bolder",
                      }}
                    >
                      Email:
                    </span>
                    {x.email}
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "bolder",
                      }}
                    >
                      Body:
                    </span>
                    {x.body}
                  </p>
                  <IconButton
                    onClick={() => {
                      deletecomment(x.id);
                    }}
                    color="error"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      navigate(`add/${x.id}`);
                    }}
                    color="primary"
                    aria-label="delete"
                  >
                    <EditIcon />
                  </IconButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

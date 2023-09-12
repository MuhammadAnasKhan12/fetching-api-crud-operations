import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Comment from "../../pages/comments"
import Addcomments from "../../pages/addcom"
export default function AppRouter() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Comment />} />
            <Route path="add/" element={<Addcomments />} />
            <Route path="add/:id" element={<Addcomments />} />
          </Routes>
        </Router>
      </>
    );    
}
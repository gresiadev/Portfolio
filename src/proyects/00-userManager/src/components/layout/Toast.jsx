import { useEffect } from "react"
import useErrors from "../../hooks/useErrors"

function Toast() {
   const {errorMsg, closeModal}=useErrors()
   const duration = 3000

   useEffect(() => {
      const timer = setTimeout(() => {
         closeModal()
      }, duration)
      return () => clearTimeout(timer)
   }, [duration, closeModal])

   return (
      <div style={{
         position: "fixed",
         top: "1rem",
         right: "1rem",
         backgroundColor: "#f44336",
         color: "white",
         padding: "1rem 1.5rem",
         borderRadius: "8px",
         boxShadow: "0 0 10px rgba(0,0,0,0.2)",
         zIndex: 1000,
         animation: "fadeIn 0.3s ease"
      }}>
         {errorMsg}
      </div>
   )
}

export default Toast
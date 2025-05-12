import { useState, useEffect } from "react"
import useFormUser from "./useFormUser"

function useFormValidity() {
   const { currentUser } = useFormUser()

   const [formData, setFormData] = useState({
      id: null,
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      address: {
         city: "",
         street: "",
         suite: "",
      }
   })

   const [formErrors, setFormErrors] = useState({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      address: {
         city: "",
         street: "",
         suite: "",
      }
   })

   const handleChange = (e) => {
      const { name, value } = e.target

      if (["city", "street", "suite"].includes(name)) {
         setFormData(prevData => ({
            ...prevData,
            address: {
               ...prevData.address,
               [name]: value
            }
         }))
         return
      }

      setFormData(prevData => ({
         ...prevData,
         [name]: value
      }))
   }

   const validateForm = () => {
      let isValid = true
      let errors = {
         name: "",
         username: "",
         email: "",
         phone: "",
         website: "",
         address: {
            city: "",
            street: "",
            suite: "",
         }
      }

      // NAME 

      if (!formData.name.trim()) {
         errors.name = "Debes ingresar un name."
         isValid = false
      } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
         errors.name = "Debes ingresar solo letras."
         isValid = false
      }

      // USERNAME 

      if (!formData.username.trim()) {
         errors.username = "Debes ingresar un username."
         isValid = false
      } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username.trim())) {
         errors.username = "Solo: letras, numeros, guiones bajos."
         isValid = false
      }

      //EMAIL 

      if (!formData.email.trim()) {
         errors.email = "Debes ingresar un email."
         isValid = false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
         errors.email = "Mail no valido. Ej: ejemplo@ejemplo.com"
         isValid = false
      }

      // PHONE 

      if (!formData.phone.trim()) {
         errors.phone = "Debes ingresar un number phone."
         isValid = false
      } else if (!/^\+?\d{10,15}$/.test(formData.phone.trim())) {
         errors.phone = "Debe ser un número de entre 10 y 15 dígitos."
         isValid = false
      }

      // WEBSITE 

      if (!formData.website.trim()) {
         errors.website = "Debes ingresar un website."
         isValid = false
      } else if (!/^https?:\/\/[^\s]+$/.test(formData.website.trim())) {
         errors.website = "Sitio no valido. Debe comenzar con http:// o https:// ."
         isValid = false
      }

      // CITY 
      if (!formData.address.city.trim()) {
         errors.address.city = "Debes ingresar una ciudad."
         isValid = false
      } else if ( !/^[a-zA-Z\s]+$/.test(formData.address.city.trim())) {
         errors.address.city = "Solo puede contener letras y espacios."
         isValid = false
      } else if (formData.address.city.trim().length < 2) {
         errors.address.city = "Debe tener mas de 2 caracteres."
         isValid = false
      }

      // STREET 
      if (!formData.address.street.trim()) {
         errors.address.street = "Debes ingresar una street."
         isValid = false
      } else if (!/^[a-zA-Z0-9\s]+$/.test(formData.address.street.trim())) {
         errors.address.street = "Solo puede contener letras, números y espacios."
         isValid = false
      } else if (formData.address.street.trim().length < 3) {
         errors.address.street = "Debe tener al menos 3 caracteres."
         isValid = false
      }

      // SUITE 

      if (!formData.address.suite.trim()) {
         errors.address.suite = "Debes ingresar una suite"
         isValid = false
      } else if (!/^\d+$/.test(formData.address.suite.trim())) {
         errors.address.suite = "Debe ser un número valido."
         isValid = false
      }

      setFormErrors(errors)
      return isValid
   }

   useEffect(() => {
      if (currentUser) {
         setFormData({
            id: currentUser.id || null,
            name: currentUser.name || "",
            username: currentUser.username || "",
            email: currentUser.email || "",
            phone: currentUser.phone || "",
            website: currentUser.website || "",
            address: {
               city: currentUser.address?.city || "",
               street: currentUser.address?.street || "",
               suite: currentUser.address?.suite || "",
            }
         })
      }
   }, [currentUser])
   return { formData, formErrors, handleChange, validateForm }
}

export default useFormValidity
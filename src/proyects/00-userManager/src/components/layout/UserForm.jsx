// Hooks 
import useFormUser from "../../hooks/useFormUser"
import useFormValidity from "../../hooks/useFormValidity"

function FormCreateUser() {

   const { handleShowForm, handleSubmit } = useFormUser()
   const { formData, formErrors, handleChange, validateForm } = useFormValidity()
   const txtBtn = formData.id ? "Edit user" : "Create user"

   return (
      <section className="userManager__form-container">
         <form className="userManager__form"
            onSubmit={(ev) => {
               ev.preventDefault()

               if (!validateForm()) return
               handleSubmit(formData)
            }}
         >
            <button
               className="userManager__form-btn-close"
               onClick={handleShowForm}
            >
               <span>X</span>
            </button>
            <fieldset className="userManager__form-fieldset ">
               <legend className="userManager__form-legend"><em>Personal Info</em></legend>

               <div className="userManager__form-field">
                  <label
                     className="userManager__form-field-label"
                     htmlFor="name">
                     Name :
                  </label>
                  <input
                     name="name"
                     type="text"
                     value={formData.name}
                     placeholder="name..."
                     onChange={handleChange}
                     className="userManager__form-field-input"
                  />
                  <span className="userManager__form-error ">
                     {formErrors.name && formErrors.name}
                  </span>
               </div>

               <div className="userManager__form-field">
                  <label htmlFor="username"
                     className="userManager__form-field-label"
                  >
                     Username :
                  </label>
                  <input
                     name="username"
                     type="text"
                     value={formData.username}
                     placeholder="username..."
                     onChange={handleChange}
                     className="userManager__form-field-input"

                  />
                  <span className="userManager__form-error ">
                     {formErrors.username && formErrors.username}
                  </span>
               </div>

               <div className="userManager__form-field">
                  <label htmlFor="email"
                     className="userManager__form-field-label"
                  >
                     Email :
                  </label>
                  <input
                     name="email"
                     type="text"
                     value={formData.email}
                     placeholder="email..."
                     onChange={handleChange}
                     className="userManager__form-field-input"

                  />
                  <span className="userManager__form-error ">
                     {formErrors.email && formErrors.email}
                  </span>
               </div>

               <div className="userManager__form-field">
                  <label htmlFor="phone"
                     className="userManager__form-field-label"
                  >
                     Phone :
                  </label>
                  <input
                     name="phone"
                     type="text"
                     value={formData.phone}
                     placeholder="phone..."
                     onChange={handleChange}
                     className="userManager__form-field-input"

                  />
                  <span className="userManager__form-error ">
                     {formErrors.phone && formErrors.phone}
                  </span>
               </div>

               <div className="userManager__form-field">
                  <label htmlFor="website"
                     className="userManager__form-field-label"
                  >
                     Website :
                  </label>
                  <input
                     name="website"
                     type="text"
                     placeholder="website..."
                     value={formData.website}
                     onChange={handleChange}
                     className="userManager__form-field-input"

                  />
                  <span className="userManager__form-error ">
                     {formErrors.website && formErrors.website}
                  </span>
               </div>
            </fieldset>

            <fieldset className="userManager__form-fieldset ">
               <legend className="userManager__form-legend"><em>Address Info</em></legend>

               <div className="userManager__form-field">
                  <label htmlFor="city"
                     className="userManager__form-field-label"
                  >
                     City :
                  </label>
                  <input
                     name="city"
                     type="text"
                     placeholder="city..."
                     value={formData.address.city}
                     onChange={handleChange}
                     className="userManager__form-field-input"

                  />
                  <span className="userManager__form-error ">
                     {formErrors.address.city && formErrors.address.city}
                  </span>
               </div>

               <div className="userManager__form-field">
                  <label htmlFor="street"
                     className="userManager__form-field-label"
                  >
                     Street :
                  </label>
                  <input
                     name="street"
                     type="text"
                     placeholder="street..."
                     value={formData.address.street}
                     onChange={handleChange}
                     className="userManager__form-field-input"

                  />
                  <span className="userManager__form-error ">
                     {formErrors.address.street && formErrors.address.street}
                  </span>
               </div>

               <div className="userManager__form-field">
                  <label htmlFor="suite"
                     className="userManager__form-field-label"
                  >
                     Suite :
                  </label>
                  <input
                     name="suite"
                     type="text"
                     placeholder="suite..."
                     value={formData.address.suite}
                     onChange={handleChange}
                     className="userManager__form-field-input"

                  />
                  <span className="userManager__form-error ">
                     {formErrors.address.suite && formErrors.address.suite}
                  </span>
               </div>
            </fieldset>

            <button
               className="userManager__form-button"
            >
               {txtBtn}
            </button>
         </form>

      </section>
   )
}

export default FormCreateUser
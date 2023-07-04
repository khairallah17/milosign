import { useReducer } from 'react'
import DomainLayout from '../../components/DomainLayout'
import DomainSettingsHook from '../../hooks/DomainSettingsHook'

const Employees = () => {

  const {
    employeeEmail, setEmployeeEmail,
    employeeName, setEmployeeName,
    employeePronouns, setEmployeePronouns,
    employeeTitle, setEmployeeTitle,
    employeeMobile, setEmployeeMobile,
    employeePhone, setEmployeePhone,
    employeeExtension, setEmployeeExtension,
    employeeFacebook, setEmployeeFacebook,
    employeeLinkedIn, setEmployeeLinkedIn,
    employeeTwitter, setEmployeeTwitter,
    employeeInstagram, setEmployeeInstagram,
    employeePhoto, setEmployeePhoto,
    changePermission,
    employeeGroup, setEmployeeGroup,
    createEmployeeAs, setCreateEmployeeAs,
    employeeInviteEmail, setEmployeeInviteEmail,
    onDeleteEmployee, setOnDeleteEmployee,
    setActiveNav,
  } = DomainSettingsHook()

  const employeeFields = [{ name: "email", value:employeeEmail, setter: setEmployeeEmail },
                          { name: "name", value: employeeName, setter: setEmployeeName },
                          { name: "pronouns", value: employeePronouns, setter: setEmployeePronouns },
                          { name: "title", value: employeeTitle, setter: setEmployeeTitle },
                          { name: "mobile", value: employeeMobile, setter: setEmployeeMobile },
                          { name: "phone", value: employeePhone, setter: setEmployeePhone },
                          { name: "extension", value: employeeExtension, setter: setEmployeeExtension },
                          { name: "facebook link", value: employeeFacebook, setter: setEmployeeFacebook },
                          { name: "linkedin link", value: employeeLinkedIn, setter: setEmployeeLinkedIn },
                          { name: "twitter link", value: employeeTwitter, setter: setEmployeeTwitter },
                          { name: "instagram link", value: employeeInstagram, setter: setEmployeeInstagram },
                          { name: "photo", value: employeePhoto, setter:setEmployeePhoto }]

  setActiveNav("Employees")


  return (
    <DomainLayout>

      <div className="employees-fields w-full relative py-5">

        <div className="employees-fields-header flex flex-col w-full">
          <h3 className=" font-bold">Employees fields</h3>
          <p className=' font-normal'>Add fields for your employees and use those in signatures</p>
        </div>

        <div className="employees-fields-body">

          <div className="employees-header-information w-full flex justify-between mt-5 py-2 border-t-2 border-b-2">
            <h1 className='font-bold w-1/2'>Field name</h1>
            <h1 className='font-bold w-1/2'>Employee can edit</h1>
          </div>

          <div className="employees-fields-body-fields flex flex-col w-full">

            {

              employeeFields.map(({name, value, setter}, key) => (
                <div className="single-field flex w-full py-4 border-b-2" key={key}>
                  <p className='w-1/2 capitalize'>{name}</p>
                  <input  type="checkbox" name={name} checked={value ? true : false} onChange={() => setter(!value)} id="" />
                </div>
              ))

            }

          </div>

          <div className="employees-fields-permissions flex py-5 items-center border-b-2">

            <div className="permission-header w-1/2">
              <h1 className='font-bold'>Employee editing permission</h1>
              <p className='w-3/4'>Set whether employees can edit their data on WiseStamp. You can set specifically which fields employees can edit on the table above</p>
            </div>

            <div className="permission-input">
              <select name="employee permission" className="border-2 rounded-md bg-transparent p-2 w-72" onChange={(e) => {changePermission(e.target.value)}}>
                <option value="custom">custom</option>
                <option value="all">all</option>
                <option value="none">none</option>
              </select>
            </div>

          </div>

          <div className="employees-fields-new-employee flex py-5 border-b-2">

            <div className="new-emplyee-text w-1/2">
              <h1 className="font-bold">
                New employees
              </h1>
              <p className='w-3/4'>Set defaults for new employees upon their creation on Milosign. The default group is assigned only if the employee has no department in the directory.</p>
            </div>

            <div className="new-employee-inputs flex flex-col gap-4">

              <div className="new-employee-group flex flex-col gap-2">
                <h1 className='font-bold'>Employee default group</h1>
                <select name="employee group" id="" className="border-2 rounded-md bg-transparent p-2 w-72" onChange={(e) => setEmployeeGroup(e.target.value)}>
                  <option value="Main group">Main group</option>
                  <option value="None">None</option>
                </select>
              </div>

              <div className="new-employee-state flex flex-col gap-2">
                <h1 className='font-bold'>Create employee as</h1>
                <select name="employee group" id="" className="border-2 rounded-md bg-transparent p-2 w-72" onChange={(e) => setCreateEmployeeAs(e.target.value)}>
                  <option value="Main group">Inactive</option>
                  <option value="None">Active</option>
                </select>
              </div>

            </div>

          </div>

          <div className="employees-fields-employee-activation flex items-center py-5 border-b-2">
            
            <div className="employee-activation-text w-1/2">
              <h1 className="font-bold">Employee activation</h1>
              <p className='w-3/4'>When activating employees these actions will happen automatically</p>
            </div>

            <div className="employee-activation-input">
              <input type="checkbox" name="employee activation" checked={ employeeInviteEmail ? true : false } onClick={() => setEmployeeInviteEmail(!employeeInviteEmail)} id="" />
            </div>

          </div>

          <div className="employees-fields-auto-delete flex items-center py-5">

            <div className="auto-delete-text w-1/2">
              <h1 className="font-bold">Auto delete</h1>
              <p className='w-3/4'>Automatically remove employee from Milosign, if that employee no longer exists on your undefined directory</p>
            </div>

            <div className="auto-delete-input">
              <select name="auto delete" className="border-2 rounded-md bg-transparent p-2 w-72" id="" onChange={(e) => setOnDeleteEmployee(e.target.value)}>
                <option value="Keep employee on Milosign">Keep employee on Milosign</option>
                <option value="Remove employee from Milosign">Remove employee from Milosign</option>
              </select>
            </div>

          </div>

        </div>

      </div>

    </DomainLayout>
  )
}

export default Employees
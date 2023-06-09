

const RegisterModal = (props:Object) => {

  return (
    <div>
    <input type="checkbox" id="register-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <div className="modal-action">
          <label htmlFor="register-modal" className="btn">Yay!</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RegisterModal
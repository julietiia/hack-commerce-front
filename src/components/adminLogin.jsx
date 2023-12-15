const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      const response = await axios({
        method: "POST",
        url:  `${import.meta.env.VITE_PORT_URL}/tokens`,
        data: {
          email,
          password,
        },
      });
      dispatch(login(response.data));
      console.log(response.data)
      navigate("#");
    };
  
  
    return (
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" id="exampleInputEmail1" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" id="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
       
        <button type="submit" className="col-12 btn btn-dark check-out-button rounded">
          Login
        </button>
        <div className='mt-3 text-decoration-underline'>
         <Link to="/sign-up"> <p> or create a new account</p> </Link>
        </div>
      </form>
    );
  };
  
  export default AdminLogin;
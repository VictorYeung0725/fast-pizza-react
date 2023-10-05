import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  //for navigate
  const navigate = useNavigate();
  const className = 'text-sm text-blue-500 hover:text-blue-900';
  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;

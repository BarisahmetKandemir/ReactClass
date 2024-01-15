import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

const ContactDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then(Data => setUser(Data))
  },[id]);

  return (
    <div>
      <h2>User Detail</h2>
      {user && (
          <>
            <pre>{JSON.stringify(user,null,2)}</pre>
              <p>{user.email}</p>
            </>
          )
      }
      <Link to={`/contact/${Number(id)-1}`}>Önceki kullanıcı</Link><br/>
      <Link to={`/contact/${Number(id)+1}`}>Sonraki kullanıcı</Link>
    </div>
  );
}

export default ContactDetail;

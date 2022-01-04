import React from 'react';
import Icon from '../Icon';
import cuid from 'cuid';

const ProfileUser = (props) => {
  const uniqueId = cuid();
  return (
    <Icon uniqueId={uniqueId} {...props}>
      <title>profile-user</title>
      <path d='M10 9.040c2.496 0 4.52-2.024 4.52-4.52s-2.024-4.52-4.52-4.52c-2.496 0-4.52 2.024-4.52 4.52v0c0 2.496 2.024 4.52 4.52 4.52v0zM10 1.9c1.447 0 2.62 1.173 2.62 2.62s-1.173 2.62-2.62 2.62c-1.447 0-2.62-1.173-2.62-2.62v0c0-1.447 1.173-2.62 2.62-2.62v0zM17.060 12.6c-1.702-1.48-3.94-2.382-6.389-2.382-0.229 0-0.456 0.008-0.681 0.023l0.030-0.002c-0.179-0.011-0.388-0.018-0.599-0.018-2.478 0-4.746 0.899-6.495 2.39l0.014-0.012c-1.076 1.060-1.742 2.533-1.742 4.161 0 0.056 0.001 0.112 0.002 0.167l-0-0.008c0 1.9 1.9 3.080 3.64 3.080h10.32c1.74 0 3.66-1.18 3.66-3.080 0.001-0.042 0.002-0.091 0.002-0.14 0-1.638-0.674-3.118-1.761-4.179l-0.001-0.001zM15.16 18.1h-10.32c-0.82 0-1.74-0.48-1.74-1.18-0.001-0.034-0.002-0.073-0.002-0.113 0-1.112 0.452-2.119 1.182-2.847l0-0c1.383-1.14 3.172-1.832 5.123-1.832 0.154 0 0.306 0.004 0.458 0.013l-0.021-0.001h0.18c0.158-0.011 0.342-0.017 0.528-0.017 1.968 0 3.774 0.693 5.187 1.849l-0.015-0.012c0.73 0.728 1.182 1.735 1.182 2.847 0 0.040-0.001 0.080-0.002 0.119l0-0.006c0 0.7-0.92 1.18-1.74 1.18z'></path>
    </Icon>
  );
};

export default ProfileUser;

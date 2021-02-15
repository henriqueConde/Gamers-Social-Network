import React from 'react';
import styles from './UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';
import { useDispatch, useSelector } from 'react-redux';
import { photoPost } from '../../store/photoPost';

const UserPhotoPost = () => {
  const title = useForm();
  const description = useForm();
  const [img, setImg] = React.useState({});
  const { data, error, loading } = useSelector((state) => state.photoPost);
  const { token } = useSelector((state) => state.token.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('title', title.value);
    formData.append('description', description.value);
    console.log(formData)
    dispatch(photoPost({ formData, token }));
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Post " />
      <form onSubmit={handleSubmit}>
        <Input label="Title" type="text" name="title" {...title} />
        <Input label="Description" type="text" name="description" {...description} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Posting...</Button>
        ) : (
          <Button>Post</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;

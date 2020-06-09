import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from '../component/CardItem';

const Draft = () => {
  const data = [
    {
      id: 1,
      author: 'Kaushal Saraswat',
      heading: 'Blog Title 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/QjBngkH/dark.jpg',
      createdAt: '12/2/2025',
    },
    {
      id: 2,
      author: 'Archit Jain',
      heading: 'Blog Title 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/KG7Mhgz/cse.jpg',
      createdAt: '15/2/2021',
    },
    {
      id: 3,
      author: 'Kaushal Saraswat',
      heading: 'Blog Title 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/QjBngkH/dark.jpg',
      createdAt: '12/2/2025',
    },
    {
      id: 4,
      author: 'Archit Jain',
      heading: 'Blog Title 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/KG7Mhgz/cse.jpg',
      createdAt: '15/2/2021',
    },
    {
      id: 5,
      author: 'Manali Somani',
      heading: 'Blog Title 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/LDT95T1/Audios-Co-Streaming-App.jpg',
      createdAt: '17/12/2020',
    },
  ];

  return (
    <Fragment>
      <section className="container form-box-3">
        <div className="btn-box">
          <Link to="/draft" className="btn-dash-3-active">
            <i className="far fa-edit"></i>{' '}
            <span className="hide-sm">Draft</span>
          </Link>
          <Link to="/pending" className="btn-dash-3">
            <i className="fas fa-external-link-alt"></i>{' '}
            <span className="hide-sm">PendingForApproval</span>
          </Link>
          <Link to="/correction" className="btn-dash-3">
            <i className="far fa-clock"></i>{' '}
            <span className="hide-sm">PendingForCorrection</span>
          </Link>
          <Link to="/approved" className="btn-dash-3">
            <i className="far fa-check-circle"></i>{' '}
            <span className="hide-sm">Approved</span>
          </Link>
        </div>

        {data.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </section>
    </Fragment>
  );
};

export default Draft;

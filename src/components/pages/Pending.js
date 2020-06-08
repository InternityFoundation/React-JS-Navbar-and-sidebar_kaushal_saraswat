import React, { Fragment } from 'react';
import WhiteNav from '../layout/whiteNav';
import { Link } from 'react-router-dom';
import CardItem from '../component/CardItem';
import Sidebar from '../layout/Sidebar';

const Pending = () => {
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
      author: 'Manali Somani',
      heading: 'Blog Title 3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sintpossimus corporis sunt necessitatibus! Minus nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiisdolor? Illo perferendis eveniet cum cupiditate aliquam',
      img: 'https://i.ibb.co/LDT95T1/Audios-Co-Streaming-App.jpg',
      createdAt: '17/12/2020',
    },
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
      <WhiteNav />
      <Sidebar />
      {/* <WhiteSide /> */}
      <section className="form-box-3">
        <div className="btn-box">
          <Link to="/draft" className="btn-dash-3">
            Draft
          </Link>
          <Link to="/pending" className="btn-dash-3-active">
            PendingForApproval
          </Link>
          <Link to="/correction" className="btn-dash-3">
            PendingForCorrection
          </Link>
          <Link to="/approved" className="btn-dash-3">
            Approved
          </Link>
        </div>

        {data.map((data) => (
          <CardItem key={data.id} data={data} />
        ))}
      </section>
    </Fragment>
  );
};

export default Pending;
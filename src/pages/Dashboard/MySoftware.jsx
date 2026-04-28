import React from 'react';
import { Table, Pagination} from 'react-bootstrap';

const MySoftware = () => {
  return (
    <>

    <div className=" bg-white rounded-3 shadow-sm">
      <div className="p-4 d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 fw-500 ">My Products</h5>
     
      </div>

      <Table responsive hover className="align-middle" style={{ fontSize: '0.85rem' }}>
      <thead style={{backgroundColor:"#F9F9FC",color:"black"}} className=' border-top border-bottom'>
  <tr style={{ borderTop: "1px solid #EDEEF3", borderBottom: "1px solid #EDEEF3" }} >
    <th className="px-4 py-3  fw-medium ">Order ID</th>
    <th className="px-4 py-3 fw-medium ">Product</th>
    <th className="px-4 py-3 fw-medium">Start Date</th>
    <th className="px-4 py-3 fw-medium">End Date</th>
    <th className="px-4 py-3 fw-medium">Status</th>
  </tr>
</thead>

        <tbody >
          {[
            { id: '202002', product: 'Handmade Pouch', startDate: '12 Dec 2023', endDate: '12 Dec 2023', status: 'In Progress'  },
            { id: '201901', product: 'Smartwatch K2', startDate: '1 Dec 2023', endDate: '1 Dec 2023', status: 'Inactive'  },
            { id: '201800', product: 'Smartwatch K1', startDate: '18 Nov 2023', endDate: '18 Nov 2023', status: 'Expired'  },
            { id: '201881', product: 'Headphone GH Pro', startDate: '2 Nov 2023', endDate: '2 Nov 2023', status: 'In Progress'  },
            { id: '201643', product: 'Sphere X', startDate: '7 Sep 2023', endDate: '7 Sep 2023', status: 'Active'  },
            { id: '201644', product: 'Sphere X', startDate: '7 Sep 2023', endDate: '7 Sep 2023', status: 'Active'  },
            { id: '201645', product: 'Sphere X', startDate: '7 Sep 2023', endDate: '7 Sep 2023', status: 'Active'  },
            { id: '201646', product: 'Sphere X', startDate: '7 Sep 2023', endDate: '7 Sep 2023', status: 'Active'  },
          ].map((item, idx) => (
            <tr key={idx} style={{ borderBottom: "1px solid #EDEEF3" }} >
              <td className=" px-4 py-3 fw-medium" style={{color:"#4266FF", cursor: 'pointer' }}>{item.id}</td>
              <td className='px-4'>
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-secondary rounded" style={{ width: '30px', height: '30px' }} />
                  <span className='text-black fw-medium'>{item.product}</span>
                </div>
              </td>
              <td className='px-4 fw-medium'>{item.startDate}</td>
              <td className='px-4 fw-medium'>{item.endDate}</td>
              <td className='px-4 '>
              <div
  className="py-1 px-2 rounded-3 fw-semibold  text-capitalize d-inline-block"
  style={{
    backgroundColor:
      item.status === 'Active'
        ? 'rgba(34, 201, 164, 0.1)'
        : item.status === 'Inactive'
        ? 'rgba(255, 106, 26, 0.1'
        : item.status === 'In Progress'
        ? 'rgba(13, 202, 240, 0.1)'
        : 'rgba(255, 59, 59, 0.1)', // secondary

    color:
      item.status === 'Active'
        ? '#18BBA2'
        : item.status === 'Inactive'
        ? '#FF6A1A'
        : item.status === 'In Progress'
        ? '#0DCAF0'
        : '#FF3B3B',
  }}
>
  {item.status}
</div>


              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3 px-4 ">
        <small className="text-muted">Showing 1-5 from 2,400</small>
        <Pagination size="sm" className="">
          <Pagination.First  />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>

    <style>{`.pagination .page-item .page-link {
  border: none;
  background-color: #f5f5f5;     /* light gray background */
  color: #888;                   /* text color */
  border-radius: 12px;           /* rounded corners */
  margin: 0 4px;
  padding: 6px 12px;
  transition: all 0.2s ease-in-out;
}

/* Hover effect */
.pagination .page-item .page-link:hover {
  background-color: #e0e0e0;
  color: #333;
}

/* Active page */
.pagination .page-item.active .page-link {
  background-color: #4266FF;     /* solid blue */
  color: #fff;
  font-weight: bold;
}

/* Disabled buttons */
.pagination .page-item.disabled .page-link {
  background-color: #f5f5f5;
  color: #ccc;
}`}</style>
    </>
  );
};

export default MySoftware;

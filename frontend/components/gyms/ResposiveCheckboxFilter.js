import React, { useState, useEffect } from 'react'
import { Offcanvas, Button, Form } from 'react-bootstrap'
import styles from './g-component.module.css'

const ResponsiveCheckboxFilter = ({ options }) => {
  const [show, setShow] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState([])

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleOptionChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }

  const renderCheckboxes = () =>
    options.map((option) => (
      <div key={option} className={`${styles.checkboxes} `}>
        <input
          type="checkbox"
          id={`check-${option}`}
          checked={selectedOptions.includes(option)}
          onChange={() => handleOptionChange(option)}
          className={styles.checkbox}
        />
        <label htmlFor={`check-${option}`} className={styles.select}>
          {option}
        </label>
      </div>
    ))

  return (
    <div className={styles.filter}>
      {isMobile ? (
        <>
          <div className={styles.filterContainer}>
            <Button
              variant="primary"
              onClick={handleShow}
              className={`d-md-none ${styles.filterButton}`}
            >
              自訂搜尋條件
            </Button>
          </div>

          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            className={`${styles.offcanvas}`}
          >
            <Offcanvas.Header
              closeButton
              className="styles.offcanvasHeader"
            ></Offcanvas.Header>
            <Offcanvas.Body className={styles.offcanvasBody}>
              <Form className={styles.flexBetween}>
                <p>篩選｜</p>
                {renderCheckboxes()}
              </Form>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      ) : (
        <div className={`${styles.container} d-flex align-items-center`}>
          <p className={`${styles.h20}d-flex align-items-center m-0 pe-3`}>
            篩選｜
          </p>
          <div
            className={`${styles.h20} d-none d-md-block d-flex align-items-center`}
          >
            <div className="d-flex gap-3 align-items-center ">
              {renderCheckboxes()}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResponsiveCheckboxFilter
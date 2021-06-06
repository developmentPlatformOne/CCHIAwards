import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function ApplyForm() {
  const formik = useFormik({
    initialValues: {
        companyName: "",
        companyType: "",
        companyUrl: "",
        companyDescription: "",
        contactTitle: "",
        contactNo: "",
        emailAddress: "",
        awardList: "",
        callEntry: "",
        ContactName: "",
        CompanyLogo: "",
        AttachFile1: "",
        AttachFile2: ""
    },
    validationSchema: Yup.object({
        companyName: Yup.string()
            //  .min(2, "Mininum 2 characters")
            //  .max(15, "Maximum 15 characters")
             .required("Required!"),
        companyType: Yup.string()
            .required("Required!"),
        companyUrl: Yup.string()
            .min(8, "Minimum 8 characters")
            .required("Required!"),
        companyDescription: Yup.string()
            .min(2, "Mininum 2 characters")
            .max(15, "Maximum 15 characters")
            .required("Required!"),
        contactTitle: Yup.string()
            .required("Required!"),
        contactNo: Yup.string()
            .required("Required!"),
        emailAddress: Yup.string()
            .email("Invalid email format")
            .required("Required!"),
        awardList: Yup.string()
            .required("Required!"),
        callEntry: Yup.string()
            .required("Required!"),
        ContactName: Yup.string()
            .required("Required!"),
        CompanyLogo: Yup.mixed()
            .required("Required!")
            .test('fileSize', "File is too large", value => value ? value.size <= 999999999999999 : null)
            .test('fileType', "PDF Only", value => value ? ['application/pdf'].includes(value.type) : null ),
        AttachFile1: Yup.mixed()
            .required("Required!")
            .test('fileSize', "File is too large", value => value ? value.size <= 999999999999999 : null)
            .test('fileType', "PDF Only", value => value ? ['application/pdf'].includes(value.type) : null ),
        AttachFile2: Yup.mixed()
            .required("Required!")
            .test('fileSize', "File is too large", value => value ? value.size <= 999999999999999 : null)
            .test('fileType', "PDF Only", value => value ? ['application/pdf'].includes(value.type) : null ),
    }),
    onSubmit: values => {
        let CompanyLogoFile = values.CompanyLogo;
        let AttachFile1File = values.AttachFile1;
        let AttachFile2File = values.AttachFile2;
        let formData = new FormData();
        formData.append('CompanyLogo', CompanyLogoFile);
        formData.append('AttachFile1', AttachFile1File);
        formData.append('AttachFile2', AttachFile2File);

        const options = {
            headers: {
                'Authorization': 'hkjmgfrdklytrslssadjyrmakeinssocmdynkg',
                "Content-Type": "multipart/form-data"
            }
        };

        axios.post(`http://89.189.232.130/api/Nomination/UploadNomination?
            &companyName=${values.companyName}
            &companyType=${values.companyType}
            &companyUrl=${values.companyUrl}
            &companyDescription=${values.companyDescription}
            &contactTitle=${values.contactTitle}
            &contactNo=${values.contactNo}
            &emailAddress=${values.emailAddress}
            &awardList=${values.awardList}
            &callEntry=${values.callEntry}
            &ContactName=${values.ContactName}`,
        formData,
        options)
        .then(res => {
             console.log('Res ',res)
        })
        .catch(err => {
            console.log('Err ', err)
        });
    },
  });

  return (
    <Container>
        <Form onSubmit={formik.handleSubmit}>

        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.companyName && formik.touched.companyName ? (
                    <Form.Text className="text-muted">{formik.errors.companyName}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>Company Type</Form.Label>
                    <Form.Control
                        type="text"
                        name="companyType"
                        placeholder="Company Type"
                        value={formik.values.companyType}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.companyType && formik.touched.companyType ? (
                    <Form.Text className="text-muted">{formik.errors.companyType}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>Company Url</Form.Label>
                    <Form.Control
                        type="text"
                        name="companyUrl"
                        placeholder="Company Url"
                        value={formik.values.companyUrl}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.companyUrl && formik.touched.companyUrl ? (
                    <Form.Text className="text-muted">{formik.errors.companyUrl}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col xs md lg="8">
                <Form.Group>
                    <Form.Label>Company Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="companyDescription"
                        value={formik.values.companyDescription}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.companyDescription && formik.touched.companyDescription ? (
                    <Form.Text className="text-muted">{formik.errors.companyDescription}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>Contact Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="contactTitle"
                        placeholder="Contact Title"
                        value={formik.values.contactTitle}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.contactTitle && formik.touched.contactTitle ? (
                    <Form.Text className="text-muted">{formik.errors.contactTitle}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                        type="number"
                        name="contactNo"
                        placeholder="Contact Number"
                        value={formik.values.contactNo}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.contactNo && formik.touched.contactNo ? (
                    <Form.Text className="text-muted">{formik.errors.contactNo}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        name="emailAddress"
                        placeholder="Email Address"
                        value={formik.values.emailAddress}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.emailAddress && formik.touched.emailAddress ? (
                    <Form.Text className="text-muted">{formik.errors.emailAddress}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>
            
        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>Award List</Form.Label>
                    <Form.Control
                        as="select"
                        name="awardList"
                        value={formik.values.awardList}
                        onChange={formik.handleChange}
                    >
                        <option>Chose Award</option>
                        <option>test1</option>
                        <option>test2</option>
                    </Form.Control>
                    {formik.errors.awardList && formik.touched.awardList ? (
                    <Form.Text className="text-muted">{formik.errors.awardList}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>Call Entry</Form.Label>
                    <Form.Control
                        type="text"
                        name="callEntry"
                        placeholder="Call Entry"
                        value={formik.values.callEntry}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.callEntry && formik.touched.callEntry ? (
                    <Form.Text className="text-muted">{formik.errors.callEntry}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>Contact Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="ContactName"
                        placeholder="Contact Name"
                        value={formik.values.ContactName}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.ContactName && formik.touched.ContactName ? (
                    <Form.Text className="text-muted">{formik.errors.ContactName}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col>
                <Form.Group>
                    <Form.Label>Company Logo</Form.Label>
                    <Form.Control
                        type="file"
                        name="CompanyLogo"
                        placeholder="Company Logo"
                        onChange={(event) => {
                            formik.setFieldValue("CompanyLogo", event.currentTarget.files[0]);
                        }}
                    />
                    {formik.errors.CompanyLogo && formik.touched.CompanyLogo ? (
                    <Form.Text className="text-muted">{formik.errors.CompanyLogo}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>Attach File 1</Form.Label>
                    <Form.Control
                        type="file"
                        name="AttachFile1"
                        placeholder="Attach File 1"
                        onChange={(event) => {
                            formik.setFieldValue("AttachFile1", event.currentTarget.files[0]);
                        }}
                    />
                    {formik.errors.AttachFile1 && formik.touched.AttachFile1 ? (
                    <Form.Text className="text-muted">{formik.errors.AttachFile1}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                    <Form.Label>Attach File 2</Form.Label>
                    <Form.Control
                        type="file"
                        name="AttachFile2"
                        placeholder="Attach File 2"
                        onChange={(event) => {
                            formik.setFieldValue("AttachFile2", event.currentTarget.files[0]);
                        }}
                    />
                    {formik.errors.AttachFile2 && formik.touched.AttachFile2 ? (
                    <Form.Text className="text-muted">{formik.errors.AttachFile2}</Form.Text>
                    ) : ''}
                </Form.Group>
            </Col>
        </Row>
        <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </Container>
  );
}
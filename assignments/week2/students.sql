CREATE TABLE `students` (
`name` VARCHAR(20) NOT NULL,
`yearnumber` INT NOT NULL,
`majornumber` INT NOT NULL,
`individualnumber` INT NOT NULL,
`major` VARCHAR(20) NOT NULL,
`phonenumber` VARCHAR(15) NOT NULL,
`address` VARCHAR(30) NOT NULL,
`creditstaken` INT DEFAULT 0,
`gpa` DECIMAL(2,1) DEFAULT 0.0,
`enrollment` TINYINT(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
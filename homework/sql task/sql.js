// create table Students(
//     studentID int,
//     firstname char(20),
//     lastname char(20),
//     age int,
//     university char(20),
//     city char(20))
    
//     insert into Students(studentID, firstname, lastname, age, university, city)
//     values (1,'Zahra','Hasanova',19,'ADU','Baku'),
//     (2,'Arzu','Mirzabayova',20,'ADNSU','Baku'),
//     (3,'Farid','Fathi-Govashin',24,'BDU','Baku'),
//     (4,'Hasan','Salimzada',20,'UNEC','Baku'),
//     (5,'Fuad','Rasulov',23,'UNEC','Baku'),
//     (6,'Sabuhi','Mammadzada',21,'BSU','Baku'),
//     (7,'Zahra','Hasanova',19,'ADU','Baku')
    
    
//     select * from Students
//     select age from Students
//     select firstname, lastname from Students
//     select firstname from Students where firstname like 'M%' or firstname like 'N%' 
//     select firstname from Students where not firstname = 'Zahra'
//     select firstname from Students where firstname like '_u%'
//     update Students set city ='Rome' where studentID= 2 or studentID= 3;
//     select * from Students where age >20
//     select * from Students order by age asc
//     select * from Students order by firstname desc
//     select distinct firstname from Students
//     select sum(age) from Students
//     select min(age) from Students
//     select max(age) from Students
//     select count(*) from Students
//     select avg(age) from Students
//     delete from Students where studentID= 5
//     select * from students where firstName in ('Hasan','Arzu')
//     select * from students where age between 22 and 29
//     select top(4) * from Students
//     drop table Students
    
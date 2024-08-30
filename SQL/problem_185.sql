select Department, Employee, Salary from (
    select department.name as Department, employee.name as Employee, employee.salary as Salary,dense_rank() over(
        partition by department.name order by employee.salary desc
    ) top_salaries
    from employee
    join department
    on employee.departmentId = department.id
) salaries_rank
where top_salaries <= 3;
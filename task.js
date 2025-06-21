
class Employee{
    constructor(eId,eName){
        this.eId=eId;
        this.eName=eName;
        this.tasks=[];
    }

    addTask(taskId){
         this.tasks.push(taskId)

    }

    removeTask(taskId){
        this.tasks=this.tasks.filter(id=>id!=taskId);
    }

    
}


class Task{
    constructor(taskId,title,description,status,assignee=null){
        this.taskId=taskId;
        this.title=title;
        this.description=description;
        this.status=status
        this.assignee=assignee;
    }
   
    set Assignee(eId){
        this.assignee=eId;
    }

    get Assignee(){
        return this.assignee;
    }

}


class TaskManager{
    constructor(){
        this.tasks=[]
        this.employees=[]
    }
   
    addTask(task){
        this.tasks.push(task);

    }

    removeTask(tId){
        const task=this.tasks.find(t=>t.taskId===tId)
        
        if(task && task.Assignee!=null){
            console.log("Cannot remove task");
            return;
            
        }

        this.tasks=this.tasks.filter(t=>t.taskId!=tId)
        console.log("The tasks is removed");  

    }

    addEmployee(employee){
        this.employees.push(employee);

    }

    removeEmployee(employeeId){

        const employee=this.employees.find(e=>e.eId==employeeId);

        if(employee && employee.tasks.length>0){
            console.log("can't  remove employee");
            return;
            
        }

        this.employees=this.employees.filter(e=>e.eId!=employeeId);
        console.log("Employee is removed");
    
    }

    assigneeTask(tId,empId){
        const task=this.tasks.find(t=>t.taskId===tId)
         const employee=this.employees.find(e=>e.eId==empId);

         if(task && employee){
            if(task.Assignee!=null){
                console.log("Task is already assigned");
                return;
                
            }

            task.Assignee=empId;
            employee.addTask(tId);
            console.log("Task is assigned");
            


         }


       else{
        console.log("Employee task is not found");
        
       }

      

    }



    unAssigneeTask(tId,empId){

        const task=this.tasks.find(t=>t.taskId===tId)
         const employee=this.employees.find(e=>e.eId==empId);

         if(task && employee && task.Assignee==empId){

            task.Assignee=null;
            employee.removeTask(tId);
            console.log("Task unassigned");
            
         }
         else{
            console.log("Task is not assigned so can't unassigned");
            
         }

        
    }

    getAssignedTask(employeeId){
        const employee=this.employees.find(e=>e.eId==employeeId);

        if(!employee){
            console.log("Employee is not fount");
            return [];
            
        }

        return this.tasks.filter(task=>task.Assignee==employeeId);


    }


}


const taskManager = new TaskManager();
const employee1=new Employee(10,"Madasamy");
const employee2=new Employee(20,"Anand");

taskManager.addEmployee(employee1);
taskManager.addEmployee(employee2);

const task1=new Task(1,"CNG Operation","hfkdjffldkk","Pending");
const task2=new Task(2,"ONG Operation","hfkdjffldkk","Pending");

taskManager.addTask(task1);
taskManager.addTask(task2);

taskManager.assigneeTask(1,10);

// taskManager.unAssigneeTask(1,10);

// taskManager.removeTask(1);

console.log(taskManager.getAssignedTask(10));
  



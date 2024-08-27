
type Teacher = {
  teacher_id: number;
  teacher_name: string;
  teacher_age: number;
};

type Student = {
  student_id: number;
  student_name: string;
  student_grade: number;
};

type intersected_type = Teacher & Student;

const University: intersected_type = {
  teacher_id: 12,
  teacher_name: "mr.",
  teacher_age: 22,
  student_id: 1162,
  student_name: "moeein",
  student_grade: 20
};

export { intersected_type };

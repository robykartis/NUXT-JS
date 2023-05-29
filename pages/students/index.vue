<template>
    <div class="mt-2 container">
        <div class="card">
            <div class="card-header">
                <h4>Student List
                    <NuxtLink to="/students/create" class="btn btn-outline-dark float-end">Add Student</NuxtLink>
                </h4>
            </div>
            <div class="card-body">
                <div v-if="isLoading">
                    <Loading title="Loading.." />
                </div>
                <div v-else>
                    <table class="table table-striped table-bordered table-responsive">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Course</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Create At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(student, index) in students" :key="index">
                                <td>{{ student.id }}</td>
                                <td>{{ student.name }}</td>
                                <td>{{ student.course }}</td>
                                <td>{{ student.email }}</td>
                                <td>{{ student.phone }}</td>
                                <td>{{ student.created_at }}</td>
                                <td>
                                    <NuxtLink :to="`/students/${student.id}`" class="btn btn-dark btn-sm mx-2">Edit
                                    </NuxtLink>
                                    <button type="button" @click="deleteStudent($event, student.id)"
                                        class="btn btn-dark btn-sm mx-2">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {

    name: 'student',
    data() {
        return {
            students: {},
            isLoading: true
        }
    },
    mounted() {
        this.getStudents()
    },
    methods: {
        getStudents() {
            this.isLoading = true
            axios.get(`http://localhost:8000/api/students`).then(res => {
                // console.log(res.data.data)
                this.isLoading = false
                this.students = res.data.student
            })
        },
        deleteStudent(event, studentId) {
            if (confirm('Apa kamu mau negapus data ?')) {
                event.target.innerText = 'Deleting'
                axios.delete(`http://localhost:8000/api/students/${studentId}/delete`).then(res => {
                    event.target.innerText = 'Deleting'
                    this.getStudents()
                })
            }
        }
    }
}
</script>

<style scoped></style>
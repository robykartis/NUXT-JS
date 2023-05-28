<template>
    <div class="mt-5 container">
        <div class="card">
            <div class="card-header">
                <h4>Edit Student
                    <NuxtLink class="btn btn-danger float-end" to="/students">Back</NuxtLink>
                </h4>
            </div>
            <div v-if="isLoading" class="p-3">
                <Loading :title="isLoadingTitle" />
            </div>
            <div v-else>
                <form @submit.prevent="updateStudent">
                    <div class="card-body">
                        <div class="mb-3">
                            <label>Name</label>
                            <input type="text" v-model="student.name" class="form-control">
                            <span class="text-danger" v-if="this.errorList.name"> {{ this.errorList.name[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label>Course</label>
                            <input type="text" v-model="student.course" class="form-control">
                            <span class="text-danger" v-if="this.errorList.course"> {{ this.errorList.course[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label>Email</label>
                            <input type="text" v-model="student.email" class="form-control">
                            <span class="text-danger" v-if="this.errorList.email"> {{ this.errorList.email[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label>Phone</label>
                            <input type="text" v-model="student.phone" class="form-control">
                            <span class="text-danger" v-if="this.errorList.phone"> {{ this.errorList.phone[0] }}</span>
                        </div>

                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'studentEdit',
    data() {
        return {
            studentId: '',
            student: {},
            isLoading: false,
            isLoadingTitle: 'Loading...',
            errorList: {}
        }
    },
    mounted() {
        this.studentId = this.$route.params.id
        // alert(this.studentId)
        this.getStudent(this.studentId)
    },
    methods: {

        getStudent(studentId) {
            this.isLoading = true
            axios.get(`http://localhost:8000/api/students/${studentId}/edit`).then(res => {
                // console.log(res)
                this.isLoading = false
                this.student = res.data.student
            })
        },

        updateStudent() {
            this.isLoading = true
            this.isLoadingTitle = "Updating..."
            var myThis = this

            axios.put(`http://localhost:8000/api/students/${this.studentId}/update`, this.student).then(res => {
                console.log(res, 'res')
                alert(res.data.message)

                this.isLoading = false
                this.isLoadingTitle = "Loading"
                this.errorList = {}
            })
                .catch(function (error) {
                    console.log(error, 'errors')
                    if (error.response) {
                        if (error.response.status == 422) {
                            myThis.errorList = error.response.data.message
                        }
                    }
                    myThis.isLoading = false
                })
        }
    }
}
</script>
<template>
    <div class="mt-2 container">
        <div class="card">
            <div class="card-header">
                <h4>Add Student
                    <NuxtLink class="btn btn-outline-dark float-end" to="/students">Back</NuxtLink>
                </h4>
            </div>
            <div v-if="isLoading" class="p-3">
                <Loading :title="isLoadingTitle" />
            </div>
            <div v-else>
                <form @submit.prevent="saveStudent">
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
                            <input type="email" v-model="student.email" class="form-control">
                            <span class="text-danger" v-if="this.errorList.email"> {{ this.errorList.email[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label>Phone</label>
                            <input type="number" v-model="student.phone" class="form-control">
                            <span class="text-danger" v-if="this.errorList.phone"> {{ this.errorList.phone[0] }}</span>
                        </div>

                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-dark">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {

    name: 'studentsCreate',
    data() {
        return {
            student: {
                name: '',
                course: '',
                email: '',
                phone: ''
            },
            isLoading: false,
            isLoadingTitle: 'Loading...',
            errorList: {},
        }
    },
    methods: {
        saveStudent() {
            const router = useRouter();
            this.isLoading = true
            this.isLoadingTitle = "Saving..."
            var myThis = this

            axios.post(`http://localhost:8000/api/students`, this.student).then(res => {
                console.log(res, 'res')
                // alert(res.data.success)
                toastr.success('Data successfully saved.')

                this.student.name = ''
                this.student.course = ''
                this.student.email = ''
                this.student.phone = ''
                this.isLoading = false
                this.isLoadingTitle = "Loading"
                router.push({ path: "/students" });
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
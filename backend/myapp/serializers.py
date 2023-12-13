# myapp/serializers.py
from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'email', 'password', 'username','name','surname','security_question_1','security_answer_1')
        extra_kwargs = {'password': {'write_only': True}}


    
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        if username and password:
            user = CustomUser(username=username, password=password)

            if user:
                # The credentials are valid, return the user
                data['user'] = user
            else:
                # The credentials are invalid, raise an error
                raise serializers.ValidationError("Invalid credentials")
        else:
            raise serializers.ValidationError("Username and password are required")

        return data

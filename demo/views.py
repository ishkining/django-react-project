from django.shortcuts import render
from .models import Book
from rest_framework import viewsets
from .serializers import BookSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


def first(request):
    context = {
        'books': Book.objects.all(),
    }
    return render(request, 'demo/first.html', context)


class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
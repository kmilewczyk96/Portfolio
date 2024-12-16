FROM python:3.13.1-alpine3.21
LABEL maintainer="kmilewczyk"

ENV PYTHONUNBUFFERED=1

COPY ./requirements.txt /tmp/requirements.txt
COPY ./api /api
WORKDIR /api
EXPOSE 8000

ARG DEV=false
RUN python -m venv /venv && \
/venv/bin/pip install --upgrade pip && \
apk add --update --no-cache postgresql-client && \
apk add --update --no-cache --virtual .tmp-build-deps \
build-base postgresql-dev musl-dev && \
/venv/bin/pip install -r /tmp/requirements.txt && \
rm -rf /tmp && \
apk del .tmp-build-deps && \
adduser \
--disabled-password \
--no-create-home \
django-user

ENV PATH="/venv/bin:$PATH"

USER django-user


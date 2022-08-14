import styled from 'styled-components';
import Container from '../components/Layout/Container';

export default function Login() {
  return (
    <LoginContainer>
      <div className="inner">
        <svg className="logo" width="273" height="264" viewBox="0 0 273 264" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="273" height="264" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_82_25" transform="scale(0.00549451 0.00568182)" />
            </pattern>
            <image
              id="image0_82_25"
              width="182"
              height="176"
              xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7QAsUGhvdG9zaG9wIDMuMAA4QklNA+0AAAAAABAASAAAAAEAAQBIAAAAAQAB/+Edi2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzcgNzkuMTU5NzY4LCAyMDE2LzA4LzExLTEzOjI0OjQyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcEdJbWc9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9nL2ltZy8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgSWxsdXN0cmF0b3IgQ0MgMjAxNyAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMi0wNi0xMVQxMzoyNDoxNyswOTowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6VGh1bWJuYWlscz4KICAgICAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8eG1wR0ltZzp3aWR0aD4yNTY8L3htcEdJbWc6d2lkdGg+CiAgICAgICAgICAgICAgICAgIDx4bXBHSW1nOmhlaWdodD4yNDg8L3htcEdJbWc6aGVpZ2h0PgogICAgICAgICAgICAgICAgICA8eG1wR0ltZzpmb3JtYXQ+SlBFRzwveG1wR0ltZzpmb3JtYXQ+CiAgICAgICAgICAgICAgICAgIDx4bXBHSW1nOmltYWdlPi85ai80QUFRU2taSlJnQUJBZ0VBU0FCSUFBRC83UUFzVUdodmRHOXphRzl3SURNdU1BQTRRa2xOQSswQUFBQUFBQkFBU0FBQUFBRUEmI3hBO0FRQklBQUFBQVFBQi8rNEFEa0ZrYjJKbEFHVEFBQUFBQWYvYkFJUUFCZ1FFQkFVRUJnVUZCZ2tHQlFZSkN3Z0dCZ2dMREFvS0N3b0smI3hBO0RCQU1EQXdNREF3UURBNFBFQThPREJNVEZCUVRFeHdiR3hzY0h4OGZIeDhmSHg4Zkh3RUhCd2NOREEwWUVCQVlHaFVSRlJvZkh4OGYmI3hBO0h4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zkh4OGZIeDhmSHg4Zi84QUFFUWdBK0FFQUF3RVImI3hBO0FBSVJBUU1SQWYvRUFhSUFBQUFIQVFFQkFRRUFBQUFBQUFBQUFBUUZBd0lHQVFBSENBa0tDd0VBQWdJREFRRUJBUUVBQUFBQUFBQUEmI3hBO0FRQUNBd1FGQmdjSUNRb0xFQUFDQVFNREFnUUNCZ2NEQkFJR0FuTUJBZ01SQkFBRklSSXhRVkVHRTJFaWNZRVVNcEdoQnhXeFFpUEImI3hBO1V0SGhNeFppOENSeWd2RWxRelJUa3FLeVkzUENOVVFuazZPek5oZFVaSFREMHVJSUpvTUpDaGdaaEpSRlJxUzBWdE5WS0JyeTQvUEUmI3hBOzFPVDBaWFdGbGFXMXhkWGw5V1oyaHBhbXRzYlc1dlkzUjFkbmQ0ZVhwN2ZIMStmM09FaFlhSGlJbUtpNHlOam8rQ2s1U1ZscGVZbVomI3hBO3FibkoyZW41S2pwS1dtcDZpcHFxdXNyYTZ2b1JBQUlDQVFJREJRVUVCUVlFQ0FNRGJRRUFBaEVEQkNFU01VRUZVUk5oSWdaeGdaRXkmI3hBO29iSHdGTUhSNFNOQ0ZWSmljdkV6SkRSRGdoYVNVeVdpWTdMQ0IzUFNOZUpFZ3hkVWt3Z0pDaGdaSmpaRkdpZGtkRlUzOHFPend5Z3AmI3hBOzArUHpoSlNrdE1UVTVQUmxkWVdWcGJYRjFlWDFSbFptZG9hV3ByYkcxdWIyUjFkbmQ0ZVhwN2ZIMStmM09FaFlhSGlJbUtpNHlOam8mI3hBOytEbEpXV2w1aVptcHVjblo2ZmtxT2twYWFucUttcXE2eXRycSt2L2FBQXdEQVFBQ0VRTVJBRDhBOUdDK3VwNzJXV09jck1vdUJZNlkmI3hBO2VJOVdPMGtFVTdTR3JENDVDdkExSEVGU2VyTGxWa213ZmcwV1NiQjl3OTNQOGZ0VHFDZUtlQ09lSnVVVXFoNDIzRlZZVkIzOXNzQnMmI3hBO1czQTJMQy9DbDJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMksmI3hBO3V4VjJLc2VUeVhhUlh0OWNXMS9lMjhlb3NEZFdzYngrbVY1eXlTSWpORzBzWWtrdUpHWW80WUZ2aEs3VWh3TmZoaXo1c2hBQUZCc0ImI3hBOzBHVGJIWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFkmI3hBO3E3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXEmI3hBOzdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTcmI3hBO0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0YmI3hBO1hZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlgmI3hBO1lxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFkmI3hBO3E3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXEmI3hBOzdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTcmI3hBO0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0YmI3hBO1hZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlgmI3hBO1lxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFkmI3hBO3E3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXEmI3hBOzdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTcmI3hBO0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0YmI3hBO1hZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlgmI3hBO1lxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFkmI3hBO3E3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXEmI3hBOzdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTcmI3hBO0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0YmI3hBO1hZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlgmI3hBO1lxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFkmI3hBO3E3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXEmI3hBOzdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTcmI3hBO0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0YmI3hBO1hZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlgmI3hBO1lxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFkmI3hBO3E3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXEmI3hBOzdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTcmI3hBO0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0YmI3hBO1hZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZWc2tzVVNGNUhWRUZBV1lnRGMwRzV3RTBnbWxHVFVkUGprYUtTNmlTUmFCa1oxREN0S1YmI3hBO0JQZXVGTGE2aFlNVkMzTVRGNkJBSFUxSkpVVTMzM0JHS3ErS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMksmI3hBO3V4VjJLdXhWMkt1eFYyS3V4VjJLdXhWMkt1eFYyS3NhOHo2ZnJjMnAyVnphckhjNmNrY2tWemF1eXFRempaeHorQ2piS3pic28reVAmI3hBO2l5ckpFbHB5d0o5ekNkZC9ManpwZSthZFZ2b0gwWVd0eDZQMVZyaXp0SG1sVkxKSTVEY1NOYlN5dXEzU0svRXR1QUFHV2xNc0RhTmgmI3hBO1N2OEE0Rjg5UkMxL1IwZWd4VFEydHI2R29wYVFxME04VXJOS3dDd25uelI5eXZBTUFRcXhsK2FsTE5mSjhYbTJDeXZXODFYbHJkWE0mI3hBO3Q3STloSloxV0lXakJCQ2xDaUVOWGxzUzNYN1J4dGJUL0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFkmI3hBO3E3RlhZcTdGWFlxN0ZYWXE3RlhZcTdGWFlxeGp6UmFhL05xbGs5cmEvWHRLOU9STHEyVmtWbGM5SDR5UENyRTdBTlU4TnlBU2NxeVImI3hBO0o5elJsZ1Q1aEEzR2grY3g1aGE3OWEybDA1dlI1eUV5ZXNJVVJWbWpSQU5tYjQrTkdwVmlUVThRbzREZHA4TGV5bDl2WVhseFpYbHImI3hBO29iYXRIZnp4STZOckVVa01DaExoR2tRTUVWT1VpSGp3SFVWcjN4T0toc2p3YUd4UnMybWViaGRXaXlXU1RXaGdsWGhGTWpDM25hV1UmI3hBO28veCtnUHN2R2VhSXhYZ1ZWYU5YSW1CWXl4SGsvd0QvMlE9PTwveG1wR0ltZzppbWFnZT4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkFsdD4KICAgICAgICAgPC94bXA6VGh1bWJuYWlscz4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjItMDYtMTFUMDQ6MjQ6MTdaPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9qcGVnPC9kYzpmb3JtYXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAgICAgICAgICAwICAgMEAwICAwQFBAQEBAQFBgUFBQUFBQYGBwcIBwcGCQkKCgkJDAwMDAwMDAwMDAwMDAwMAQMDAwUEBQkGBgkNCwkLDQ8ODg4ODw8MDAwMDA8PDAwMDAwMDwwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACwALYDAREAAhEBAxEB/8QAvwABAAMBAAIDAQAAAAAAAAAAAAcICQYDBQIECgEBAQADAQEBAQAAAAAAAAAAAAAEBQYDAQIHEAABAwMCAwYDAwcGBxEAAAABAgMEABEFEgYhMQdBUWEiEwhxMhSBUhWRoUJiIxYJcrIztHU2sYKikzR0F8HRkkNTY4OjsyREhCU1Jjc4EQACAQICBQoEBQQCAwEAAAAAAQIDBBEFITFBURJhcYGhscHRIjIT8JHhBvFCciMUYjMkNMIlUoJDNf/aAAwDAQACEQMRAD8A296jb7j7BwQya431s2W6I+Oh6tIU4QVFSzzCUgcbeA7b1EvLpW8OLW3qIOYXqtKfFhi3oSK7RvchulLhMzBYp9q/BDIfaVb+Up1wfmqnjnNTbFdZn4/cNbHTGPX4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"
            />
          </defs>
        </svg>
        <h1>
          <span className="eco">ECO</span> <span className="line"></span> <span className="log">LOG</span>
        </h1>
        <div className="subscribe">
          <p>
            함께 시작하는 작은 실천, <b>에코로그</b>
          </p>
        </div>
        <div className="button_container">
          <button className="naver">네이버로 시작하기</button>
          <button className="kakao">카카오로 시작하기</button>
          <button className="google">구글로 시작하기</button>
        </div>
      </div>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  .inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin-top: 20%;
  }

  h1 {
    background-color: aliceblue;
    width: 300px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 3.25rem;
    line-height: 0px;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: space-around;
  }

  h1 .line {
    width: 5rem;
    height: 0px;
    border: 3px solid #333333;
  }

  h1 .log {
    left: 300px;
    top: 472px;
  }

  .subscribe {
    width: 400px;
  }

  p {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2;
    text-align: left;
    width: fit-content;
    border-top: 1px solid;
  }

  .button_container {
    bottom: 10px;
    text-align: center;
    margin-bottom: 15%;
  }

  button {
    margin: auto;
    width: 400px;
    height: 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin: 5px;
  }

  button.naver {
    background-color: #52ff00;
  }

  button.kakao {
    background: #fdeb00;
  }

  button.google {
    background: #f1f2f3;
    border-radius: 10px;
  }
`;
